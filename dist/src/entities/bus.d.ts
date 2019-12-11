import { ILocation } from '../interfaces/location';
declare enum BusStatus {
    Idle = "Idle",
    Booking = "Booking",
    OnRoute = "OnRoute"
}
export declare class Bus {
    id: number;
    registrationNumber: string;
    make: string;
    model: string;
    year: number;
    chasisNumber: string;
    driverName: string;
    currentLocation: string;
    route: ILocation[];
    status: BusStatus;
    capacity: number;
    availableSeats: number;
    isActive: boolean;
    isDeleted: boolean;
}
export {};
