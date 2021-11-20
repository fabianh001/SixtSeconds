export type Vehicle = {
    charge: number;
    lat: number;
    lng: number;
    status: "FREE" | "BOOKED",
    vehicleID: string;
}