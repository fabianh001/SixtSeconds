export type Vehicle = {
    charge: number;
    lat: number;
    lng: number;
    status: "FREE" | "BOOKED",
    vehicleID: string;
}
export enum VehicleType {
    TESLA = "Tesla Model 3",
    BMW = "BMW i3",
    WAYMO = "Waymo Autonomous",
}

export type VehicleWithOffer = Vehicle & {
    price: number;
}