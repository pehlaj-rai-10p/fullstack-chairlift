import * as boom from 'boom';
import * as joi from 'joi';
import * as repo from '../repositories/booking';
import * as busRepo from '../repositories/bus';
import * as riderRepo from '../repositories/rider';
import { Bus, BusStatus } from '../entities/bus';
import { Rider, RiderStatus } from '../entities/rider';
import { Booking, RideStatus } from '../entities/booking';
import { IBookingRequest } from '../interfaces/booking';

export const getAll = async () => {
    return repo.getAll();
};

export const filteredBooking = async (riderId: Number, status: string) => {
    return repo.filteredBooking(riderId, status);
};

export const getById = async (id: number) => {
    const result = await repo.getById(id);
    if (!result) {
        boom.badRequest('Invalid id');
    }
    return result;
};

export const startRide = async (bookingId: number) => {

    if (bookingId <= 0) {
        return { success: false, message: 'Provide valid booking ID.' };
    }

    const booking = await repo.getById(bookingId) as Booking;

    booking.status = RideStatus.InProgress;
    booking.arrivalTime = new Date();
    booking.pickupTime = new Date();
    const result = await repo.update(bookingId, booking);

    const rider = await riderRepo.getById(booking.riderId) as Rider;
    rider.status = RiderStatus.InRide;
    rider.numFreeRides = rider.decreaseFreeRidesCount();

    await riderRepo.update(rider.id, rider);
    const riderUpdateResult = await riderRepo.update(booking.riderId, rider);

    const bus = await busRepo.getById(booking.busId) as Bus;
    bus.status = BusStatus.OnRoute;
    const busUpdateResult = await repo.update(bookingId, booking);

    return { success: result && busUpdateResult && riderUpdateResult, booking: result, bus: busUpdateResult, rider: riderUpdateResult };
}

export const endRide = async (bookingId: number) => {

    if (bookingId <= 0) {
        return { success: false, message: 'Provide valid booking ID.' };
    }

    const booking = await repo.getById(bookingId) as Booking;

    booking.dropOffTime = new Date();
    booking.status = RideStatus.Complete;
    const result = await repo.update(bookingId, booking);

    const rider = await riderRepo.getById(booking.riderId) as Rider;
    rider.status = RiderStatus.Idle;
    const riderUpdateResult = await riderRepo.update(booking.riderId, rider);

    const bus = await busRepo.getById(booking.busId) as Bus;
    bus.status = BusStatus.Idle;
    bus.availableSeats = bus.capacity;
    const busUpdateResult = await repo.update(bookingId, booking);

    return { success: result && busUpdateResult && riderUpdateResult, booking: result, bus: busUpdateResult, rider: riderUpdateResult };
}

export const bookRide = async (payload: IBookingRequest) => {
    await joi.validate(payload, {
        riderId: joi.number().required(),
        busId: joi.number().required(),
    }, { allowUnknown: true });

    if (!payload.pickupLocation || !payload.dropOffLocation) {

        return { success: false, message: 'Please provide pickup/dropoff location.' };
    }

    const bus = await busRepo.getById(payload.busId) as Bus;
    const rider = await riderRepo.getById(payload.riderId) as Rider;

    if (bus.availableSeats <= 0) {

        return { success: false, message: 'Bus is full.' };
    }

    const bookingTime: Date = new Date();
    const booking = new Booking();
    booking.bus = bus;
    booking.rider = rider;
    booking.bookingTime = bookingTime;
    booking.arrivalTime = bookingTime;
    booking.dropOffTime = bookingTime;
    booking.pickupTime = bookingTime;
    booking.estimatedDropOffTime = bookingTime;
    booking.status = RideStatus.Idle;
    booking.trackingNumber = 'BK' + bookingTime.getTime();
    booking.pickupLocation = payload.pickupLocation;
    booking.dropOffLocation = payload.dropOffLocation;

    //TODO populate fields here
    const result = await repo.insert(booking);

    bus.availableSeats = bus.availableSeats - 1;
    bus.status = BusStatus.Booking;
    bus.currentLocation = '{}';
    const busUpdateResult = await busRepo.update(bus.id, bus);

    rider.status = RiderStatus.RideBooked;
    const riderUpdateResult = await riderRepo.update(rider.id, rider);

    return { success: result && busUpdateResult && riderUpdateResult, booking: result, bus: busUpdateResult, rider: riderUpdateResult };
};

export const softDelete = async (id: number) => {
    const result = await getById(id);
    await repo.update(id, { isDeleted: true });
    return { success: true };
};

export const hardDelete = async (id: number) => {
    const result = await getById(id);
    await repo.hardDelete(id);
    return { success: true };
};
