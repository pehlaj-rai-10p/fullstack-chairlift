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
const services = require("../services/bus");
exports.getAll = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    ctx.state.data = yield services.getAll();
    yield next();
});
exports.getById = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const id = ctx.params.id;
    ctx.state.data = yield services.getById(id);
    yield next();
});
exports.registerBus = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const bus = {
        registrationNumber: '',
        make: '',
        model: '',
        year: 0,
        chasisNumber: '',
        driverName: '',
        capacity: 0,
        route: JSON.parse("{}"),
    };
    ctx.state.data = yield services.registerBus(bus);
    yield next();
});
exports.deleteBus = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const id = ctx.params.id;
    ctx.state.data = yield services.softDelete(id);
    yield next();
});
//# sourceMappingURL=bus.js.map