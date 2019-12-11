import { Context } from 'koa';
export declare const getAll: (ctx: Context, next: () => void) => Promise<void>;
export declare const bookingDetails: (ctx: Context, next: () => void) => Promise<void>;
export declare const bookRide: (ctx: Context, next: () => void) => Promise<void>;
export declare const cancelBooking: (ctx: Context, next: () => void) => Promise<void>;
