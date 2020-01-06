import { Location } from '../entities/location';

export interface IBookingRequest {
    riderId: number;
    busId: number;
    pickupLocation: Location,
    dropOffLocation: Location,
}

export interface IBookingUpdateRequest {
    bookingId: number;
}
