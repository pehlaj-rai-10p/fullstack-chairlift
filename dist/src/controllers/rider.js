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
const services = require("../services/rider");
exports.getAll = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    ctx.state.data = yield services.getAll();
    yield next();
});
exports.getById = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const id = ctx.params.id;
    ctx.state.data = yield services.getById(id);
    yield next();
});
exports.registerRider = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const rider = {
        userName: '',
        password: '',
        firstName: '',
        lastName: '',
        mobileNumber: '',
        emailAddress: '',
    };
    ctx.state.data = yield services.registerRider(rider);
    yield next();
});
exports.updateRiderProfile = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const id = ctx.params.id;
    const rider = {
        firstName: '',
        lastName: '',
        mobileNumber: '',
        emailAddress: '',
    };
    ctx.state.data = yield services.updateRider(id, rider);
    yield next();
});
exports.deleteRider = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const id = ctx.params.id;
    ctx.state.data = yield services.softDelete(id);
    yield next();
});
//# sourceMappingURL=rider.js.map