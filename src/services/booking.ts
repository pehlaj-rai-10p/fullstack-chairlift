import * as boom from 'boom';
import * as joi from 'joi';
import * as repo from '../repositories/booking';
import * as busRepo from '../repositories/bus';
import * as riderRepo from '../repositories/rider';
import { Bus } from '../entities/bus';
import { Rider } from '../entities/rider';
import { Booking } from '../entities/booking';
import { IBookingRequest, IBookingCancelRequest } from '../interfaces/booking';
import { Timestamp } from 'typeorm';
import { ILocation } from '../interfaces/location';

export const getAll = async () => {
    return repo.getAll();
};

export const getById = async (id: number) => {
    const result = await repo.getById(id);
    if (!result) {
        boom.badRequest('Invalid id');
    }
    return result;
};

export const bookRide = async (payload: IBookingRequest) => {
    await joi.validate(payload, {
        riderId: joi.number().required(),
        busId: joi.number().required(),
        pickupLocation: joi.string().required(),
        dropOffLocation: joi.string().required(),
    });

    const bus = await busRepo.getById(payload.busId) as Bus;
    const rider = await riderRepo.getById(payload.riderId) as Rider;

    if (bus.availableSeats <= 0) {

        return null;
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
    booking.status = 'Idle';
    booking.trackingNumber = Math.floor(10000000).toString();
    booking.pickupLocation = payload.pickupLocation;
    booking.dropOffLocation = payload.dropOffLocation;

    //TODO populate fields here
    const result = await repo.insert(booking);
    return result[0];
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
