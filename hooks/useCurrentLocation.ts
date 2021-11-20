import React from "react";

export default function useCurrentLocation() {
    const [location, setLocation] = React.useState<[number, number] | null>(null);
    React.useEffect(() => {
        navigator.geolocation?.getCurrentPosition((position) => {
            setLocation([
                position.coords.latitude,
                position.coords.longitude,
            ])
        }, err => console.log(err))
    }, []);

    return location;
}