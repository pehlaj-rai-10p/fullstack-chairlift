"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compose = require("koa-compose");
const Bunyan = require("bunyan");
const KoaBunyan = require("koa-bunyan-logger");
const fs_1 = require("fs");
const path_1 = require("path");
const util = require("util");
let globalLogger;
class Logger {
    static koa(logger) {
        return compose([
            KoaBunyan(logger),
            KoaBunyan.requestIdContext(),
            KoaBunyan.requestLogger({
                formatRequestMessage() {
                    return util.format('Request %s %s', this.request.method, this.request.originalUrl);
                },
                formatResponseMessage(data) {
                    return util.format('Response (%d) %s %s in %sms', this.status, this.request.method, this.request.originalUrl, data.duration);
                },
            }),
        ]);
    }
    constructor(name, dir) {
        this.name = name || 'App';
        this.logDir = path_1.join(dir || __dirname + '/../../logs');
        this.serializers = Bunyan.stdSerializers;
        this.streams = [
            {
                level: 'debug',
                stream: process.stdout,
            },
            {
                level: 'debug',
                type: 'rotating-file',
                period: '1d',
                count: 5,
                path: path_1.join(this.logDir, 'debug.json'),
            },
            {
                level: 'error',
                type: 'rotating-file',
                period: '1d',
                count: 5,
                path: path_1.join(this.logDir, 'error.json'),
            },
            {
                level: 'warn',
                type: 'rotating-file',
                period: '1d',
                count: 5,
                path: path_1.join(this.logDir, 'warn.json'),
            },
        ];
    }
    createLogger() {
        if (globalLogger) {
            return globalLogger;
        }
        this.ensureDirectory();
        globalLogger = new Bunyan({
            name: this.name,
            serializers: this.serializers,
            streams: this.streams,
        });
        return globalLogger;
    }
    ensureDirectory() {
        if (!fs_1.existsSync(this.logDir)) {
            fs_1.mkdirSync(this.logDir);
        }
    }
}
exports.Logger = Logger;
exports.getLoggerInstance = () => new Logger('chairlift').createLogger();
//# sourceMappingURL=logger.js.map