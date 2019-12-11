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
const bus_1 = require("./bus");
const rider_1 = require("./rider");
let Booking = class Booking {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Booking.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Booking.prototype, "busId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Booking.prototype, "riderId", void 0);
__decorate([
    typeorm_1.OneToOne(_type => bus_1.Bus),
    typeorm_1.JoinColumn({ name: 'busId', referencedColumnName: 'id' }),
    __metadata("design:type", bus_1.Bus)
], Booking.prototype, "bus", void 0);
__decorate([
    typeorm_1.OneToOne(_type => rider_1.Rider),
    typeorm_1.JoinColumn({ name: 'riderId', referencedColumnName: 'id' }),
    __metadata("design:type", rider_1.Rider)
], Booking.prototype, "rider", void 0);
__decorate([
    typeorm_1.Column({
        type: 'character varying',
        length: '100'
    }),
    __metadata("design:type", String)
], Booking.prototype, "trackingNumber", void 0);
__decorate([
    typeorm_1.Column("jsonb"),
    __metadata("design:type", Object)
], Booking.prototype, "pickupLocation", void 0);
__decorate([
    typeorm_1.Column("jsonb"),
    __metadata("design:type", Object)
], Booking.prototype, "dropOffLocation", void 0);
__decorate([
    typeorm_1.Column('timestamptz'),
    __metadata("design:type", Date)
], Booking.prototype, "bookingTime", void 0);
__decorate([
    typeorm_1.Column('timestamptz'),
    __metadata("design:type", Date)
], Booking.prototype, "estimatedDropOffTime", void 0);
__decorate([
    typeorm_1.Column('timestamptz'),
    __metadata("design:type", Date)
], Booking.prototype, "arrivalTime", void 0);
__decorate([
    typeorm_1.Column('timestamptz'),
    __metadata("design:type", Date)
], Booking.prototype, "pickupTime", void 0);
__decorate([
    typeorm_1.Column('timestamptz'),
    __metadata("design:type", Date)
], Booking.prototype, "dropOffTime", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Booking.prototype, "status", void 0);
__decorate([
    typeorm_1.Column({
        type: 'boolean',
        default: false,
    }),
    __metadata("design:type", Boolean)
], Booking.prototype, "isDeleted", void 0);
Booking = __decorate([
    typeorm_1.Entity('bus')
], Booking);
exports.Booking = Booking;
//# sourceMappingURL=booking.js.map