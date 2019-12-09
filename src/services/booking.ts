import * as boom from 'boom';
import * as joi from 'joi';
import * as repo from '../repositories/booking';
import { Booking } from '../entities/booking';
import { IBookingRequest, IBookingCancelRequest } from '../interfaces/booking';

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
        name: joi.string().required()
    });
    const booking = new Booking();
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
