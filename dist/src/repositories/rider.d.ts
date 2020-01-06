import { Rider } from '../entities/rider';
export declare const getAll: () => Promise<Rider[]>;
export declare const getById: (id: number) => Promise<Rider | undefined>;
export declare const insert: (rider: Rider) => Promise<import("typeorm").InsertResult>;
export declare const update: (id: number, riders: Partial<Rider>) => Promise<import("typeorm").UpdateResult>;
export declare const hardDelete: (id: number) => Promise<import("typeorm").DeleteResult>;
