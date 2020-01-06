"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const config_1 = require("../../config");
const logger_1 = require("../utils/logger");
const logger = logger_1.getLoggerInstance();
class DatabaseLogger {
    constructor() {
        this.logQuery = (query, parameters) => {
            logger.info(query, parameters);
        };
        this.logQueryError = (error, query, parameters) => {
            logger.error(error, query, parameters);
        };
        this.logQuerySlow = (time, query, parameters) => {
            logger.warn(time, query, parameters);
        };
        this.logMigration = (message) => {
            logger.info(message);
        };
        this.logSchemaBuild = (message) => {
            logger.info(message);
        };
        this.log = (level, message) => {
            logger.info(level, message);
        };
    }
}
exports.bootstrapDatabase = () => __awaiter(this, void 0, void 0, function* () {
    const connectionOptions = yield typeorm_1.getConnectionOptions();
    Object.assign(connectionOptions, {
        logging: ['error'],
        logger: new DatabaseLogger(),
        synchronize: false,
        maxQueryExecutionTime: config_1.default.database.maxQueryExecutionTime,
    });
    return typeorm_1.createConnection(connectionOptions);
});
exports.clearDatabaseCache = () => __awaiter(this, void 0, void 0, function* () {
    const connection = typeorm_1.getConnection();
    return connection.queryResultCache.clear();
});
//# sourceMappingURL=typeorm.js.map