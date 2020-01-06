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
const riderRepo = require("../repositories/rider");
const rider_1 = require("../entities/rider");
exports.getAll = () => __awaiter(this, void 0, void 0, function* () {
    return riderRepo.getAll();
});
exports.getById = (id) => __awaiter(this, void 0, void 0, function* () {
    const result = yield riderRepo.getById(id);
    if (!result) {
        boom.badRequest('Invalid id');
    }
    return result;
});
exports.registerRider = (payload) => __awaiter(this, void 0, void 0, function* () {
    yield joi.validate(payload, {
        name: joi.string().required()
    });
    const rider = new rider_1.Rider();
    const result = yield riderRepo.insert(rider);
    return result[0];
});
exports.updateRider = (id, payload) => __awaiter(this, void 0, void 0, function* () {
    yield joi.validate(Object.assign({}, payload, { id }), {
        id: joi.number().required(),
        name: joi.string().required()
    });
    yield exports.getById(id);
    const result = yield riderRepo.update(id, payload);
    return result[0];
});
exports.softDelete = (id) => __awaiter(this, void 0, void 0, function* () {
    const result = yield exports.getById(id);
    yield riderRepo.update(id, { isDeleted: true });
    return { success: true };
});
exports.hardDelete = (id) => __awaiter(this, void 0, void 0, function* () {
    const result = yield exports.getById(id);
    yield riderRepo.hardDelete(id);
    return { success: true };
});
//# sourceMappingURL=rider.js.map