import React from "react";

import GoogleMapReact from 'google-map-react';
import useCurrentLocation from "../hooks/useCurrentLocation";
import { useVehicles } from "../domain/sixt";
import { mapOption } from "../constants/mapOptions";
import CarMapMarker from "./CarMapMarker";
export enum MapDisplayMode {
    CAR_LOCATION,
}
const defaultLocation = {
    lat: 48.13743,
    lng: 11.57549
};

export default function Map() {
    const location = useCurrentLocation();
    const vehicles = useVehicles(vehicle => vehicle.status === 'FREE' && vehicle.charge >= 50);
    return (
        <div className="w-full flex-1 bg-primary">
            <GoogleMapReact
                yesIWantToUseGoogleMapApiInternals
                bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY as string }}
                defaultCenter={defaultLocation}
                center={{
                    lat: location?.[0] ?? defaultLocation.lat,
                    lng: location?.[1] ?? defaultLocation.lng
                }}
                options={mapOption}
                defaultZoom={11}
            >
                {
                    vehicles?.map(vehicle => (
                        <CarMapMarker key={vehicle.vehicleID} lat={vehicle.lat} lng={vehicle.lng} />
                    ))
                }
            </GoogleMapReact>
       </div>
    )
}
