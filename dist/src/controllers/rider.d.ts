import { Context } from 'koa';
export declare const getAll: (ctx: Context, next: () => void) => Promise<void>;
export declare const getById: (ctx: Context, next: () => void) => Promise<void>;
export declare const registerRider: (ctx: Context, next: () => void) => Promise<void>;
export declare const updateRiderProfile: (ctx: Context, next: () => void) => Promise<void>;
export declare const deleteRider: (ctx: Context, next: () => void) => Promise<void>;
