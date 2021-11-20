import { useState } from 'react';
import { useVehicles } from '../domain/sixt';
import useCurrentLocation from '../hooks/useCurrentLocation';
import { BookingRequest } from '../types/BookingRequest';
import { Vehicle } from '../types/Vehicle';
import { distanceFromLatLng } from '../utils';
import BookForm from './BookForm';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';

enum Page {
    BOOKING_FORM,
    VEHICLE_SELECTION,
    INSURANCE_SELECTION,
    CONFIRMATION
}
export default function MainPanel() {
    const [page, setPage] = useState<Page>(Page.BOOKING_FORM);

    const [bookingRequest, setBookingRequest] = useState<BookingRequest | null>(null);
    const [vehiclesAvailable, setVehiclesAvailable] = useState<Vehicle[]>([]);
    const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
    
    const vehicles = useVehicles();
    const location = useCurrentLocation();

    const onBookingFormSubmit = (request: BookingRequest) => {
        setBookingRequest(request);    
        setPage(Page.VEHICLE_SELECTION);
        const vehiclesInProximity = vehicles?.filter(vehicle => vehicle.status === "FREE" && 5 >= distanceFromLatLng(vehicle, { lat: location?.[0] ?? 0, lng: location?.[1] ?? 0})) ?? []
        console.log({ vehiclesInProximity });
        setVehiclesAvailable(vehiclesInProximity);
    };

    const onVehicleSelected = (vehicle: Vehicle) => {
        setSelectedVehicle(vehicle);
        setPage(Page.INSURANCE_SELECTION);
    }

    const onReturn = () => {
        if (page === Page.VEHICLE_SELECTION) {
            setPage(Page.BOOKING_FORM);
            return;
        }
        if (page === Page.INSURANCE_SELECTION) {
            setPage(Page.VEHICLE_SELECTION);
            return;
        }
        if (page === Page.CONFIRMATION) {
            setPage(Page.INSURANCE_SELECTION);
            return;
        }
    }

    return (
        <div className='z-10 -mt-6 p-4 flex-shrink h-36 bg-base-100 rounded-t-3xl shadow-lg flex-1 flex flex-col items-stretch'>
            {page === Page.BOOKING_FORM &&  <BookForm onSubmit={onBookingFormSubmit} /> }
            {page === Page.VEHICLE_SELECTION && (
                <SecondPage
                    onSelect={onVehicleSelected} 
                    availableVehicles={vehiclesAvailable} 
                    onReturn={onReturn}
                />
            )}
            {page === Page.INSURANCE_SELECTION &&  <ThirdPage /> }
        </div>
    )
}