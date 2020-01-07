import { getRepository } from 'typeorm';
import { Bus, Rider, Booking } from '../entities';
import * as busRepo from './bus';
import * as riderRepo from './rider';

export const getAll = async (riderId: Number) => {
    return (await getRepository(Booking).find()).filter((booking: Booking) => booking.riderId == riderId);
}

export const filteredBooking = async (riderId: Number, status: string) => {
    return (await getRepository(Booking).find()).filter((booking: Booking) => booking.riderId == riderId && booking.status == status);
}

export const getById = async (id: number) => {
    const booking = await getRepository(Booking).findOne({ id }) as Booking;
    //const bus = await busRepo.getById((booking as Booking).busId);
    //const rider = await riderRepo.getById((booking as Booking).riderId);
    //booking.bus = bus as Bus;
    //booking.rider = rider as Rider;
    return booking;
}

export const insert = async (booking: Booking) => {
    return getRepository(Booking).insert(booking);
}

export const update = async (id: number, booking: Partial<Booking>) => {
    return getRepository(Booking).update({ id }, booking);
}

export const hardDelete = async (id: number) => {
    return getRepository(Booking).delete({ id });
}
