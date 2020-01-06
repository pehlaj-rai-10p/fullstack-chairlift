"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
var BusStatus;
(function (BusStatus) {
    BusStatus["Idle"] = "Idle";
    BusStatus["Booking"] = "Booking";
    BusStatus["OnRoute"] = "OnRoute";
})(BusStatus || (BusStatus = {}));
let Bus = class Bus {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Bus.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'character varying',
        length: '100'
    }),
    __metadata("design:type", String)
], Bus.prototype, "registrationNumber", void 0);
__decorate([
    typeorm_1.Column({
        type: 'character varying',
        length: '100'
    }),
    __metadata("design:type", String)
], Bus.prototype, "make", void 0);
__decorate([
    typeorm_1.Column({
        type: 'character varying',
        length: '100'
    }),
    __metadata("design:type", String)
], Bus.prototype, "model", void 0);
__decorate([
    typeorm_1.Column({
        type: 'integer',
        default: 0
    }),
    __metadata("design:type", Number)
], Bus.prototype, "year", void 0);
__decorate([
    typeorm_1.Column({
        type: 'character varying',
        length: '100'
    }),
    __metadata("design:type", String)
], Bus.prototype, "chasisNumber", void 0);
__decorate([
    typeorm_1.Column({
        type: 'character varying',
        length: '100'
    }),
    __metadata("design:type", String)
], Bus.prototype, "driverName", void 0);
__decorate([
    typeorm_1.Column({
        name: 'location',
        type: 'character varying',
        length: '100'
    }),
    __metadata("design:type", String)
], Bus.prototype, "currentLocation", void 0);
__decorate([
    typeorm_1.Column("jsonb"),
    __metadata("design:type", Array)
], Bus.prototype, "route", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Bus.prototype, "status", void 0);
__decorate([
    typeorm_1.Column({
        type: 'integer',
        default: 0
    }),
    __metadata("design:type", Number)
], Bus.prototype, "capacity", void 0);
__decorate([
    typeorm_1.Column({
        type: 'integer',
        default: 0
    }),
    __metadata("design:type", Number)
], Bus.prototype, "availableSeats", void 0);
__decorate([
    typeorm_1.Column({
        type: 'boolean',
        default: true,
    }),
    __metadata("design:type", Boolean)
], Bus.prototype, "isActive", void 0);
__decorate([
    typeorm_1.Column({
        type: 'boolean',
        default: false,
    }),
    __metadata("design:type", Boolean)
], Bus.prototype, "isDeleted", void 0);
Bus = __decorate([
    typeorm_1.Entity('bus')
], Bus);
exports.Bus = Bus;
//# sourceMappingURL=bus.js.map