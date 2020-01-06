import { Booking } from '../entities/booking';
import { IBookingRequest } from '../interfaces/booking';
export declare const getAll: () => Promise<Booking[]>;
export declare const getById: (id: number) => Promise<Booking | undefined>;
export declare const bookRide: (payload: IBookingRequest) => Promise<any>;
export declare const softDelete: (id: number) => Promise<{
    success: boolean;
}>;
export declare const hardDelete: (id: number) => Promise<{
    success: boolean;
}>;
