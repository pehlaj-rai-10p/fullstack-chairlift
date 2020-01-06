import { Rider } from '../entities/rider';
import { IRiderRequest, IRiderProfileRequest } from '../interfaces/rider';
export declare const getAll: () => Promise<Rider[]>;
export declare const getById: (id: number) => Promise<Rider | undefined>;
export declare const registerRider: (payload: IRiderRequest) => Promise<any>;
export declare const updateRider: (id: number, payload: IRiderProfileRequest) => Promise<any>;
export declare const softDelete: (id: number) => Promise<{
    success: boolean;
}>;
export declare const hardDelete: (id: number) => Promise<{
    success: boolean;
}>;
