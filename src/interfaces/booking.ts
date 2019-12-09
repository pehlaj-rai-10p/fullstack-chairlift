export interface IBookingRequest {
    riderId: number;
    busId: number;
    bookingTime: Date;
    pickupTime: Date;
    estimatedDropOffTime: Date;
    pickupLocation: JSON,
    dropOffLocation: JSON,
}

export interface IBookingCancelRequest {
    bookingId: number;
}
