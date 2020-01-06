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
const services = require("../services/booking");
exports.getAll = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    ctx.state.data = yield services.getAll();
    yield next();
});
exports.bookingDetails = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const id = ctx.params.id;
    ctx.state.data = yield services.getById(id);
    yield next();
});
exports.bookRide = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const booking = {
        riderId: 0,
        busId: 0,
        bookingTime: new Date(),
        pickupTime: new Date(),
        dropOffTime: new Date(),
        arrivalTime: new Date(),
        estimatedDropOffTime: new Date(),
        pickupLocation: JSON.parse("{}"),
        dropOffLocation: JSON.parse("{}"),
    };
    ctx.state.data = yield services.bookRide(booking);
    yield next();
});
exports.cancelBooking = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const id = ctx.params.id;
    ctx.state.data = yield services.softDelete(id);
    yield next();
});
//# sourceMappingURL=booking.js.map