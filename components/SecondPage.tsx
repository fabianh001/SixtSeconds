import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VehicleType, VehicleWithOffer } from "../types/Vehicle";
import CarOption from "./CarOption";

type Props = {
  onReturn: () => void;
  availableVehicles: VehicleWithOffer[];
  onSelect: (vehicle: VehicleWithOffer) => void;
}

const vehicleTypeList = [VehicleType.BMW, VehicleType.TESLA, VehicleType.WAYMO];

export default function SecondPage({ availableVehicles, onReturn, onSelect }: Props) {
  const randomVehicleType = availableVehicles.map(_ => {
    const randomInt = Math.round(Math.random() * 100);
    return vehicleTypeList[randomInt % vehicleTypeList.length];
  });
  return (
    <div className="h-full flex flex-col items-stretch gap-2">
      <div className="h-12 flex items-center gap-1">
        <button type="button" onClick={onReturn} className="btn btn-ghost">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
          <span className="text-xl">
              <b>Select your car</b>
          </span>
      </div>
      <div className="overflow-y-auto flex flex-col gap-2">
        {
          availableVehicles.map((vehicle, i) => (
            <CarOption 
              key={vehicle.vehicleID} 
              onSelect={() => onSelect(vehicle)}
              carModel={randomVehicleType[i]}
              price={vehicle.price}
            />
          ))
        }
      </div>
    </div>
  );
}
