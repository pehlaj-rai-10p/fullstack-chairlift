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
const boom = require("boom");
const joi = require("joi");
const repo = require("../repositories/booking");
const booking_1 = require("../entities/booking");
exports.getAll = () => __awaiter(this, void 0, void 0, function* () {
    return repo.getAll();
});
exports.getById = (id) => __awaiter(this, void 0, void 0, function* () {
    const result = yield repo.getById(id);
    if (!result) {
        boom.badRequest('Invalid id');
    }
    return result;
});
exports.bookRide = (payload) => __awaiter(this, void 0, void 0, function* () {
    yield joi.validate(payload, {
        name: joi.string().required()
    });
    const booking = new booking_1.Booking();
    const result = yield repo.insert(booking);
    return result[0];
});
exports.softDelete = (id) => __awaiter(this, void 0, void 0, function* () {
    const result = yield exports.getById(id);
    yield repo.update(id, { isDeleted: true });
    return { success: true };
});
exports.hardDelete = (id) => __awaiter(this, void 0, void 0, function* () {
    const result = yield exports.getById(id);
    yield repo.hardDelete(id);
    return { success: true };
});
//# sourceMappingURL=booking.js.map