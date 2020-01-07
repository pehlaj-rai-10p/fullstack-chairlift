import * as boom from 'boom';
import * as joi from 'joi';
import * as repo from '../repositories/booking';
import * as busRepo from '../repositories/bus';
import * as riderRepo from '../repositories/rider';
import { Bus, BusStatus, Rider, RiderStatus, Booking, RideStatus } from '../entities';
import { IBookingRequest } from '../interfaces';

export const getAll = async (riderId: Number) => {
    return repo.getAll(riderId);
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

    if (!booking) {
        return { success: false, message: 'Booking details not found.' };
    }

    const bus = await busRepo.getById(booking.busId) as Bus;
    const rider = await riderRepo.getById(booking.riderId) as Rider;

    rider.status = RiderStatus.InRide;
    rider.numFreeRides = rider.decreaseFreeRidesCount();
    const riderUpdateResult = await riderRepo.update(rider.id, rider);

    bus.status = BusStatus.OnRoute;
    const busUpdateResult = await busRepo.update(bus.id, bus);

    booking.status = RideStatus.InProgress;
    booking.arrivalTime = new Date();
    booking.pickupTime = new Date();
    const result = await repo.update(booking.id, booking);

    return { success: result && busUpdateResult && riderUpdateResult, booking: result, bus: busUpdateResult, rider: riderUpdateResult };
}

export const endRide = async (bookingId: number) => {

    if (bookingId <= 0) {
        return { success: false, message: 'Provide valid booking ID.' };
    }

    const booking = await repo.getById(bookingId) as Booking;

    const rider = await riderRepo.getById(booking.riderId) as Rider;
    rider.status = RiderStatus.Idle;
    const riderUpdateResult = await riderRepo.update(booking.riderId, rider);

    const bus = await busRepo.getById(booking.busId) as Bus;
    bus.status = BusStatus.Idle;
    bus.availableSeats = bus.capacity;
    const busUpdateResult = await busRepo.update(bus.id, bus);

    booking.dropOffTime = new Date();
    booking.status = RideStatus.Complete;
    const result = await repo.update(bookingId, booking);

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
    booking.busId = payload.busId;
    booking.riderId = payload.riderId;
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
    //bus.currentLocation = '{}';
    const busUpdateResult = await busRepo.update(bus.id, bus);

    rider.status = RiderStatus.RideBooked;
    const riderUpdateResult = await riderRepo.update(rider.id, rider);

    return { success: result && busUpdateResult && riderUpdateResult, booking: result, bus: busUpdateResult, rider: riderUpdateResult };
};

export const softDelete = async (id: number) => {
    const result = await getById(id);
    if (result) {
        return repo.update(id, { isDeleted: true });
    }
    return { success: false };
};

export const hardDelete = async (id: number) => {
    const result = await getById(id);
    if (result) {
        return repo.hardDelete(id);
    }
    return { success: false };
};
