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
const logger_1 = require("../utils/logger");
const logger = logger_1.getLoggerInstance();
const index_1 = require("../../config/index");
const typeorm_1 = require("./typeorm");
exports.bootstrap = () => __awaiter(this, void 0, void 0, function* () {
    try {
        yield typeorm_1.bootstrapDatabase();
        logger.info(`postgres connected host: ${index_1.default.database.host} , port: ${index_1.default.database.port}`);
        if (index_1.default.env !== 'local') {
            logger.info('Clearing cache');
            yield typeorm_1.clearDatabaseCache();
        }
    }
    catch (err) {
        logger.error('Error while connecting database', err);
        throw err;
    }
    return Promise.resolve(true);
});
//# sourceMappingURL=index.js.map