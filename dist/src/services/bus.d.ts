import { Bus } from '../entities/bus';
import { IBusRequest } from '../interfaces/bus';
export declare const getAll: () => Promise<Bus[]>;
export declare const getById: (id: number) => Promise<Bus | undefined>;
export declare const registerBus: (payload: IBusRequest) => Promise<any>;
export declare const softDelete: (id: number) => Promise<{
    success: boolean;
}>;
export declare const hardDelete: (id: number) => Promise<{
    success: boolean;
}>;
