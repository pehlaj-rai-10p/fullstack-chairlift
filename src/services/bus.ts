import * as boom from 'boom';
import * as joi from 'joi';
import * as repo from '../repositories/bus';
import { Bus } from '../entities/bus';
import { IBusRequest, IBusBookingRequest, IBusUpdateRequest } from '../interfaces/bus';

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

export const registerBus = async (payload: IBusRequest) => {
    await joi.validate(payload, {
        name: joi.string().required()
    });
    const bus = new Bus();
    //TODO populate fields here
    const result = await repo.insert(bus);
    return result[0];
};

export const updateBusDetails = async (id: number, payload: IBusUpdateRequest) => {
    await joi.validate({ ...payload, id }, {
        id: joi.number().required(),
        name: joi.string().required()
    });
    await getById(id);
    const result = await repo.update(id, payload);
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
