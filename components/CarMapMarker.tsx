import { faCar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    lat: number;
    lng: number;
}
export default function CarMapMarker({ }:Props) {
    return (
        <div className="rounded-full flex items-center justify-center bg-warning text-white h-8 w-8">
                <FontAwesomeIcon icon={faCar} />
        </div>
    )
}