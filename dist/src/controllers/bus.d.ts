import { Context } from 'koa';
export declare const getAll: (ctx: Context, next: () => void) => Promise<void>;
export declare const getById: (ctx: Context, next: () => void) => Promise<void>;
export declare const registerBus: (ctx: Context, next: () => void) => Promise<void>;
export declare const deleteBus: (ctx: Context, next: () => void) => Promise<void>;
