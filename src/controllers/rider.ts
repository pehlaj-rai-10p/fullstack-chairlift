import { Context } from 'koa';
import * as services from '../services/rider';
import { IRiderLoginRequest } from '../interfaces/rider';

export const getAll = async (ctx: Context, next: () => void) => {
    ctx.state.data = await services.getAll();
    await next();
};

export const getById = async (ctx: Context, next: () => void) => {
    const id: number = ctx.params.id;
    ctx.state.data = await services.getById(id);
    await next();
};

export const getByUserName = async (ctx: Context, next: () => void) => {
    const loginRequest: IRiderLoginRequest = ctx.request.body;
    ctx.state.data = await services.getByUserName(loginRequest.userName);
    await next();
};


export const registerRider = async (ctx: Context, next: () => void) => {
    const rider = {
        userName: '',
        password: '',
        firstName: '',
        lastName: '',
        mobileNumber: '',
        emailAddress: '',
    };
    ctx.state.data = await services.registerRider(rider);
    await next();
};

export const updateRiderProfile = async (ctx: Context, next: () => void) => {
    const id: number = ctx.params.id;
    const rider = {
        firstName: '',
        lastName: '',
        mobileNumber: '',
        emailAddress: '',
    };
    ctx.state.data = await services.updateRider(id, rider);
    await next();
};

export const deleteRider = async (ctx: Context, next: () => void) => {
    const id: number = ctx.params.id;
    ctx.state.data = await services.softDelete(id);
    await next();
};
