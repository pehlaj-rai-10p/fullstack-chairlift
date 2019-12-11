import { Context } from 'koa';
import * as services from '../services/booking';

export const getAll = async (ctx: Context, next: () => void) => {
    ctx.state.data = await services.getAll();
    await next();
};

export const bookingDetails = async (ctx: Context, next: () => void) => {
    const id: number = ctx.params.id;
    ctx.state.data = await services.getById(id);
    await next();
};

export const bookRide = async (ctx: Context, next: () => void) => {
    const booking = {
        riderId: 0,
        busId: 0,
        bookingTime: new Date(),
        pickupTime: new Date(),
        dropOffTime: new Date(),
        arrivalTime: new Date(),
        estimatedDropOffTime: new Date(),
        pickupLocation: JSON.parse("{}"),
        dropOffLocation: JSON.parse("{}"),
    };
    ctx.state.data = await services.bookRide(booking);
    await next();
};

export const cancelBooking = async (ctx: Context, next: () => void) => {
    const id: number = ctx.params.id;
    ctx.state.data = await services.softDelete(id);
    await next();
};
