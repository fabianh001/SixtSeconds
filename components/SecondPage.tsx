import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VehicleType } from "../types/Vehicle";
import CarOption from "./CarOption";

type Props = {
  onReturn: () => void;
}
export default function SecondPage({ onReturn }: Props) {
  return (
    <div className="h-full flex flex-col items-stretch gap-2">
      <div className="h-12 flex items-center gap-1">
        <button type="button" onClick={onReturn} className="btn btn-ghost">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
          <span className="text-xl">
              <b className="">Select your car</b>
          </span>
      </div>
      <div className="overflow-y-auto flex flex-col gap-2">
        <CarOption onSelect={console.log} carModel={VehicleType.WAYMO} />
        <CarOption onSelect={console.log} carModel={VehicleType.TESLA} />
        <CarOption onSelect={console.log} carModel={VehicleType.BMW} />
      </div>
    </div>
  );
}
