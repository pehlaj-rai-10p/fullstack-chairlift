export interface IBusRequest {
    registrationNumber: string;
    make: string;
    model: string;
    year: number;
    chasisNumber: string;
    driverName: string;
    capacity: number;
    route: JSON;
}

export interface IBusUpdateRequest {
    id: number;
    driverName: string;
    location: string;
    status: string;
}

export interface IBusStatusUpdateRequest {
    id: number;
    status: string;
}

export interface IBusLocationUpdateRequest {
    id: number;
    location: string;
}

export interface IBusDriverUpdateRequest {
    id: number;
    driver: string;
}

export interface IBusRouteUpdateRequest {
    id: number;
    route: string;
}

export interface IBusBookingRequest {
    id: number;
    riderID: number;
}
