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

    const pickupLatLng: any = { lat: ctx.params.pickupLat, lng: ctx.params.pickupLng };
    const dropOffLatLng: any = { lat: ctx.params.dropOffLat, lng: ctx.params.dropOffLng };

    const booking = {
        riderId: ctx.params.riderId,
        busId: ctx.params.riderId,
        pickupLocation: pickupLatLng,
        dropOffLocation: dropOffLatLng,
    };
    ctx.state.data = await services.bookRide(booking);
    await next();
};

export const cancelBooking = async (ctx: Context, next: () => void) => {
    const id: number = ctx.params.id;
    ctx.state.data = await services.softDelete(id);
    await next();
};
