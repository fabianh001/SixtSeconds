import React, { useEffect, useReducer, useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useDebounce from '../hooks/useDebounce';

import { BookingRequest, Location } from "../types/BookingRequest"
import useGeocode from '../hooks/useGeocode';
import { GeocodeResult } from '../constants/mockLocationSearchResult';
import { VehicleType } from '../types/Vehicle';


const defaultBookingRequest: BookingRequest = {
    currentLocation: null,
    targetLocation: null,
    vehicleType: VehicleType.BMW,
    pickupTime: new Date(),
}

type FormReduceAction = {
    type: keyof BookingRequest,
    value: null | Date | Location;
}
const formReducer = (currentValue: BookingRequest, action: FormReduceAction): BookingRequest => {
    return ({
        ...currentValue,
        [action.type]: action.value,
    });
};

type Props = {
    onSubmit: (event: BookingRequest) => void
};

export default function BookForm({ onSubmit }: Props) {
    const [formValue, dispatch] = useReducer(formReducer, defaultBookingRequest);
    const [searchString, setSearchString] = useState('');
    const [debouncedSearchString, isDebouncing] = useDebounce(searchString, 1000);
    const [locationSearchResults, clearSearchResults] = useGeocode(isDebouncing ? null : debouncedSearchString);

    const selectSuggestion = (result: GeocodeResult) => {
        dispatch({ type: "targetLocation", value: result.geometry.location as Location });
        clearSearchResults();
        setSearchString(result.formatted_address);
    }
    
    useEffect(() => {
        if (formValue.targetLocation) {

        }
    }, [formValue]);

    const onSubmitBooking = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formValue);
    };

    return (
        <form onSubmit={onSubmitBooking} className="grid grid-cols-6 gap-2 w-full h-full">
            <div className="max-h-16 relative px-2 col-span-full flex items-center gap-2">
                <FontAwesomeIcon icon={faSearch} className="text-3xl opacity-70" />
                <input 
                    value={searchString}
                    onChange={e => setSearchString(e.target.value)}
                    type="text" 
                    placeholder="Where do you want to go?" 
                    className="rounded-full flex-1 input bg-base-200 text-xl" />
                {
                    locationSearchResults.length > 0 && (
                        <div className="absolute rounded-lg left-0 right-0 transform translate-y-full flex flex-col bg-base-100 z-20 shadow-lg gap-1">
                            {locationSearchResults.map(result => (
                                <div
                                    key={result.place_id} 
                                    onClick={() => selectSuggestion(result)}
                                    className="h-12 flex items-center px-2 rounded-lg hover:bg-base-200 cursor-pointer"
                                >
                                    {result?.formatted_address}
                                </div>
                            ))}
                        </div>
                )}
            </div>
            <div className="h-min form-control  col-span-3">
                <label className="label">
                    <span className="label-text text-2xl">Preferred pickup time</span>
                </label> 
                <input type="time" placeholder="time" className="input input-bordered "></input>
            </div>
            {/* <div className="h-min form-control col-span-3">
                <label className="label">
                    <span className="label-text">Vehicle type</span>
                </label> 
                <select className="input input-bordered">
                    <option>Tesla Modeel 3</option>
                    <option>BMW i3</option>
                    <option>Waymo Autonomous</option>
                </select>
            </div> */}
            <div className="flex-1 col-span-full h-full" />
            <button type="submit" className="btn btn-warning col-span-full h-1/2" >
                Search
            </button>
        </form>
    )
}