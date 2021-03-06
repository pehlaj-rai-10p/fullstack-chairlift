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
const bus_1 = require("../entities/bus");
exports.getAll = () => __awaiter(this, void 0, void 0, function* () {
    return typeorm_1.getRepository(bus_1.Bus).find({ isActive: true });
});
exports.getById = (id) => __awaiter(this, void 0, void 0, function* () {
    return typeorm_1.getRepository(bus_1.Bus).findOne({ id });
});
exports.insert = (bus) => __awaiter(this, void 0, void 0, function* () {
    return typeorm_1.getRepository(bus_1.Bus).insert(bus);
});
exports.update = (id, bus) => __awaiter(this, void 0, void 0, function* () {
    return typeorm_1.getRepository(bus_1.Bus).update({ id }, bus);
});
exports.hardDelete = (id) => __awaiter(this, void 0, void 0, function* () {
    return typeorm_1.getRepository(bus_1.Bus).delete({ id });
});
//# sourceMappingURL=bus.js.map