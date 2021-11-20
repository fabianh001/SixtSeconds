import { useQuery } from 'react-query'
import { Vehicle } from '../types/Vehicle'

export const useVehicles = (filterFn?: (v: Vehicle) => boolean) => {
    const { data, isLoading } = useQuery<Vehicle[]>('vehicles', () => {
        return fetch("/api/vehicles").then(res => res.json())
    });

    if (isLoading) return;
    const vehicles = data ?? [];
    return filterFn ? vehicles.filter(filterFn) : vehicles;
}