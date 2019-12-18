import { Context } from 'koa';
import * as services from '../services/booking';
import { IBookingRequest, IBookingUpdateRequest } from '../interfaces/booking';
import { RideStatus } from '../entities/booking';
import { string } from 'joi';

export const getAll = async (ctx: Context, next: () => void) => {
    const status = ctx.query.status;
    const riderId = ctx.query.riderId;
    if (status && (status as string).length > 0 && riderId) {
        ctx.state.data = await services.filteredBooking(riderId, status);
    } else {
        ctx.state.data = await services.getAll(riderId);
    }
    await next();
};

export const getCurrentBookings = async (ctx: Context, next: () => void) => {
    var riderId = ctx.query.riderId;
    ctx.state.data = await services.filteredBooking(riderId, RideStatus.InProgress);
    await next();
};

export const getFutureBookings = async (ctx: Context, next: () => void) => {
    var riderId = ctx.query.riderId;
    ctx.state.data = await services.filteredBooking(riderId, RideStatus.Idle);
    await next();
};

export const getCompletedBookings = async (ctx: Context, next: () => void) => {
    var riderId = ctx.query.riderId;
    ctx.state.data = await services.filteredBooking(riderId, RideStatus.Complete);
    await next();
};

export const bookingDetails = async (ctx: Context, next: () => void) => {
    const id: number = ctx.params.id;
    ctx.state.data = await services.getById(id);
    await next();
};

export const bookRide = async (ctx: Context, next: () => void) => {

    const booking: IBookingRequest = ctx.request.body;
    // const pickupLatLng: any = { lat: ctx.params.pickupLat, lng: ctx.params.pickupLng };
    // const dropOffLatLng: any = { lat: ctx.params.dropOffLat, lng: ctx.params.dropOffLng };

    // const booking = {
    //     riderId: ctx.params.riderId,
    //     busId: ctx.params.riderId,
    //     pickupLocation: pickupLatLng,
    //     dropOffLocation: dropOffLatLng,
    // };
    ctx.state.data = await services.bookRide(booking);
    await next();
};

export const startRide = async (ctx: Context, next: () => void) => {

    const booking: IBookingUpdateRequest = ctx.request.body;
    ctx.state.data = await services.startRide(booking.bookingId);
    await next();
};

export const endRide = async (ctx: Context, next: () => void) => {

    const booking: IBookingUpdateRequest = ctx.request.body;
    ctx.state.data = await services.endRide(booking.bookingId);
    await next();
};

export const cancelBooking = async (ctx: Context, next: () => void) => {
    const id: number = ctx.params.id;
    ctx.state.data = await services.softDelete(id);
    await next();
};
