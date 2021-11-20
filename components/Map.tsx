import React, { useEffect, useState } from "react";

import GoogleMapReact from 'google-map-react';
import useCurrentLocation from "../hooks/useCurrentLocation";
import { useVehicles } from "../domain/sixt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { mapOption } from "../constants/mapOptions";
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
        <div className="w-full h-1/2 bg-primary">
            <GoogleMapReact
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
                        <div className="rounded-full flex items-center justify-center bg-warning text-white h-8 w-8" key={vehicle.vehicleID} lat={vehicle.lat} lng={vehicle.lng}>
                            <FontAwesomeIcon icon={faCar} />
                        </div>
                    ))
                }
            </GoogleMapReact>
       </div>
    )
}
