import { Bus } from '../entities/bus';
export declare const getAll: () => Promise<Bus[]>;
export declare const getById: (id: number) => Promise<Bus | undefined>;
export declare const insert: (bus: Bus) => Promise<import("typeorm").InsertResult>;
export declare const update: (id: number, bus: Partial<Bus>) => Promise<import("typeorm").UpdateResult>;
export declare const hardDelete: (id: number) => Promise<import("typeorm").DeleteResult>;
