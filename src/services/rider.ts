import * as boom from 'boom';
import * as joi from 'joi';
import * as jwt from 'jsonwebtoken';
import * as riderRepo from '../repositories/rider';
import { Rider } from '../entities';
import config from "../../config";
import { IRiderRequest, IRiderProfileRequest } from '../interfaces';

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

export const getByUserName = async (userName: string) => {
    try {
        const result = await riderRepo.getByUserName(userName) as Rider;
        result.token = jwt.sign(result.emailAddress, config.jwtSecret);
        return result;
    }
    catch (error) {
        return boom.unauthorized(`Invalid Credentials: ${error}`);
    }
};

export const registerRider = async (payload: IRiderRequest) => {
    await joi.validate(payload, {
        userName: joi.string().required(),
        password: joi.string().required(),
        firstName: joi.string().required(),
        lastName: joi.string().required(),
        mobileNumber: joi.string().required(),
        emailAddress: joi.string().required(),
    });
    const rider = new Rider();
    rider.firstName = payload.firstName;
    rider.lastName = payload.lastName;
    rider.emailAddress = payload.emailAddress;
    rider.mobileNumber = payload.mobileNumber;

    rider.userName = payload.userName;
    rider.passwordHash = jwt.sign(payload.password, config.jwtSecret);

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
