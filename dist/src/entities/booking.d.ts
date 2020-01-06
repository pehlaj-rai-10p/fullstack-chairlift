import { Bus } from './bus';
import { Rider } from './rider';
import { ILocation } from '../interfaces/location';
export declare class Booking {
    id: number;
    busId: number;
    riderId: number;
    bus: Bus;
    rider: Rider;
    trackingNumber: string;
    pickupLocation: ILocation;
    dropOffLocation: ILocation;
    bookingTime: Date;
    estimatedDropOffTime: Date;
    arrivalTime: Date;
    pickupTime: Date;
    dropOffTime: Date;
    status: string;
    isDeleted: boolean;
}
