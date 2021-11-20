import React, { useEffect, useReducer, useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useDebounce from "../hooks/useDebounce";

import { BookingRequest, Location } from "../types/BookingRequest";
import useGeocode from "../hooks/useGeocode";
import { GeocodeResult } from "../constants/mockLocationSearchResult";
import { VehicleType } from "../types/Vehicle";

const defaultBookingRequest: BookingRequest = {
  currentLocation: null,
  targetLocation: null,
  vehicleType: VehicleType.BMW,
  pickupTime: new Date(),
};

type FormReduceAction = {
  type: keyof BookingRequest;
  value: null | Date | Location;
};
const formReducer = (
  currentValue: BookingRequest,
  action: FormReduceAction
): BookingRequest => {
  return {
    ...currentValue,
    [action.type]: action.value,
  };
};

type Props = {
  onSubmit: (event: BookingRequest) => void;
};

export default function BookForm({ onSubmit }: Props) {
  const [formValue, dispatch] = useReducer(formReducer, defaultBookingRequest);
  const [searchString, setSearchString] = useState("");
  const [debouncedSearchString, isDebouncing] = useDebounce(searchString, 1000);
  const [locationSearchResults, clearSearchResults] = useGeocode(
    isDebouncing ? null : debouncedSearchString
  );

  const [hasDestination, setHasDestination] = useState(false);
  const [hasTime, setHasTime] = useState(false);

  const selectSuggestion = (result: GeocodeResult) => {
    dispatch({
      type: "targetLocation",
      value: result.geometry.location as Location,
    });
    clearSearchResults();
    setSearchString(result.formatted_address);
    setHasDestination(true);
  };

  useEffect(() => {
    if (formValue.targetLocation) {
    }
  }, [formValue]);

  const onSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formValue);
  };

  return (
    <form
      onSubmit={onSubmitBooking}
      className="relative flex flex-col gap-2 w-full h-full"
    >
      <div className="max-h-16 relative px-2 flex items-center gap-2">
        <FontAwesomeIcon icon={faSearch} className="text-3xl opacity-70" />
        <input
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          type="text"
          placeholder="Where do you want to go?"
          className="rounded-full flex-1 input bg-base-200 text-xl"
        />
        {locationSearchResults.length > 0 && (
          <div className="absolute rounded-lg left-0 right-0 transform translate-y-full flex flex-col bg-base-100 z-20 shadow-lg gap-1">
            {locationSearchResults.map((result) => (
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

      {hasDestination && (
        <>
          <span className="font-bold text-2xl pt-2 mt-12 mb-2 ml-1">
            Expected travel time: <b className="text-warning">10 minutes</b>
          </span>

          <div className="h-min form-control">
            <label className="label">
              <span className="label-text text-2xl">Preferred pickup time</span>
            </label>
            <input
              type="time"
              placeholder="time"
              className="input input-bordered "
              onBeforeInputCapture={() => setHasTime(true)}
            ></input>
          </div>
          <div className="flex-1 h-full" />
        </>
      )}
      <button
        type="submit"
        disabled={!hasTime}
        className="btn btn-warning absolute w-full padding bottom-0 "
      >
        Search
      </button>
    </form>
  );
}
