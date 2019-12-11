import { Middleware } from 'koa';
import * as Bunyan from 'bunyan';
export declare class Logger {
    static koa(logger: Bunyan): Middleware;
    private logDir;
    private name;
    private serializers;
    private streams;
    constructor(name?: string, dir?: string | null);
    createLogger(): Bunyan;
    private ensureDirectory;
}
export declare const getLoggerInstance: () => Bunyan;
