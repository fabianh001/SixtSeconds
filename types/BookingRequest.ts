import { VehicleType } from "./Vehicle";

export type Location = { lat: number; lng: number };
export type BookingRequest = {
    currentLocation: Location | null;
    targetLocation: Location | null;
    pickupTime: Date;
    vehicleType: VehicleType;
}