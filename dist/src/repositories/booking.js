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
const booking_1 = require("../entities/booking");
exports.getAll = () => __awaiter(this, void 0, void 0, function* () {
    return typeorm_1.getRepository(booking_1.Booking).find();
});
exports.getById = (id) => __awaiter(this, void 0, void 0, function* () {
    return typeorm_1.getRepository(booking_1.Booking).findOne({ id });
});
exports.insert = (booking) => __awaiter(this, void 0, void 0, function* () {
    return typeorm_1.getRepository(booking_1.Booking).insert(booking);
});
exports.update = (id, booking) => __awaiter(this, void 0, void 0, function* () {
    return typeorm_1.getRepository(booking_1.Booking).update({ id }, booking);
});
exports.hardDelete = (id) => __awaiter(this, void 0, void 0, function* () {
    return typeorm_1.getRepository(booking_1.Booking).delete({ id });
});
//# sourceMappingURL=booking.js.map