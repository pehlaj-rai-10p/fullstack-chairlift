import { getRepository } from 'typeorm';
import { Booking } from '../entities/booking';

export const getAll = async () => {
    return getRepository(Booking).find();
}

export const getById = async (id: number) => {
    return getRepository(Booking).findOne({ id });
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
