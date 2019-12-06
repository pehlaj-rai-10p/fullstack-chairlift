import * as boom from 'boom';
import * as joi from 'joi';
import * as riderRepo from '../repositories/rider';
import { Rider } from '../entities/rider';
import { IRiderRequest, IRiderProfileRequest } from '../interfaces/rider';

export const getAll = async () => {
    return riderRepo.getAll();
};

export const getById = async (id: number) => {
    const result = await riderRepo.getById(id);
    if (!result) {
        boom.badRequest('Invalid id');
    }
    return result;
};

export const registerRider = async (payload: IRiderRequest) => {
    await joi.validate(payload, {
        name: joi.string().required()
    });
    const rider = new Rider();
    //TODO populate fields here
    const result = await riderRepo.insert(rider);
    return result[0];
};

export const updateRider = async (id: number, payload: IRiderProfileRequest) => {
    await joi.validate({ ...payload, id }, {
        id: joi.number().required(),
        name: joi.string().required()
    });
    await getById(id);
    const result = await riderRepo.update(id, payload);
    return result[0];
};

export const softDelete = async (id: number) => {
    const result = await getById(id);
    await riderRepo.update(id, { isDeleted: true });
    return { success: true };
};

export const hardDelete = async (id: number) => {
    const result = await getById(id);
    await riderRepo.hardDelete(id);
    return { success: true };
};
