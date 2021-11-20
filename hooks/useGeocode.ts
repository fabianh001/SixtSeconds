import { useEffect, useState } from "react";
import Geocode from 'react-geocode';
import mockLocationSearchResult, { GeocodeResult } from "../constants/mockLocationSearchResult";



export default function useGeocode(searchString: string | null): [GeocodeResult[], () => void] {
    const [results, setResults] = useState<GeocodeResult[]>([]);

    useEffect(() => {
        Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY as string);
        Geocode.enableDebug();
    }, []);

    useEffect(() => {
        if (!searchString) {
            setResults([]);
            return;
        }

        setTimeout(() => {
            const matchingResults = mockLocationSearchResult.filter(res => res.formatted_address.toLowerCase().includes(searchString.toLowerCase()));
            setResults(matchingResults);
        }, 1000);
    }, [searchString]);

    const clear = () => setResults([]);
    return [results, clear];
}