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
const rider_1 = require("../entities/rider");
exports.getAll = () => __awaiter(this, void 0, void 0, function* () {
    return typeorm_1.getRepository(rider_1.Rider).find({ isActive: true });
});
exports.getById = (id) => __awaiter(this, void 0, void 0, function* () {
    return typeorm_1.getRepository(rider_1.Rider).findOne({ id });
});
exports.insert = (rider) => __awaiter(this, void 0, void 0, function* () {
    return typeorm_1.getRepository(rider_1.Rider).insert(rider);
});
exports.update = (id, riders) => __awaiter(this, void 0, void 0, function* () {
    return typeorm_1.getRepository(rider_1.Rider).update({ id }, riders);
});
exports.hardDelete = (id) => __awaiter(this, void 0, void 0, function* () {
    return typeorm_1.getRepository(rider_1.Rider).delete({ id });
});
//# sourceMappingURL=rider.js.map