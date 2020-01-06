import { Context } from 'koa';
import * as services from '../services/bus';

export const getAll = async (ctx: Context, next: () => void) => {
    ctx.state.data = await services.getAll();
    await next();
};

export const getById = async (ctx: Context, next: () => void) => {
    const id: number = ctx.params.id;
    ctx.state.data = await services.getById(id);
    await next();
};

export const registerBus = async (ctx: Context, next: () => void) => {
    const bus = {
        registrationNumber: '',
        make: '',
        model: '',
        year: 0,
        chasisNumber: '',
        driverName: '',
        capacity: 0,
        route: JSON.parse("{}"),
    };
    ctx.state.data = await services.registerBus(bus);
    await next();
};

export const deleteBus = async (ctx: Context, next: () => void) => {
    const id: number = ctx.params.id;
    ctx.state.data = await services.softDelete(id);
    await next();
};
