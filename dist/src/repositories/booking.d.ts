import { Booking } from '../entities/booking';
export declare const getAll: () => Promise<Booking[]>;
export declare const getById: (id: number) => Promise<Booking | undefined>;
export declare const insert: (booking: Booking) => Promise<import("typeorm").InsertResult>;
export declare const update: (id: number, booking: Partial<Booking>) => Promise<import("typeorm").UpdateResult>;
export declare const hardDelete: (id: number) => Promise<import("typeorm").DeleteResult>;
