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
const Boom = require("boom");
const compose = require("koa-compose");
const config_1 = require("../../config");
const isProduction = config_1.default.env === 'production';
const handler = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        yield next();
        if (!ctx.state.data) {
            throw Boom.notFound('API not found');
        }
    }
    catch (err) {
        let metaData;
        if (err.isJoi) {
            metaData = handleJoiError(err);
        }
        else if (err.isBoom) {
            metaData = handleBoomError(err);
        }
        else {
            metaData = handleDefaultError(err);
        }
        if (!isProduction) {
            metaData.stack = err.stack;
        }
        ctx.status = +metaData.status;
        ctx.body = {
            meta: metaData,
        };
        console.error(err);
    }
});
const handleBoomError = (err) => {
    return {
        status: +err.output.statusCode,
        message: err.message,
    };
};
const handleJoiError = (err) => {
    return {
        status: 400,
        message: err.details[0].message,
    };
};
const handleDefaultError = (err) => {
    return {
        status: +err.status || 500,
        message: err.message || 'Something went wrong!',
    };
};
exports.default = () => compose([handler]);
//# sourceMappingURL=error.js.map