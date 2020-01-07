import { Location } from '../entities';

export interface IBookingRequest {
    riderId: number;
    busId: number;
    pickupLocation: Location,
    dropOffLocation: Location,
}

export interface IBookingUpdateRequest {
    bookingId: number;
}
