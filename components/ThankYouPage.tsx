import { faArrowLeft, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


type Props = {
    onReturn: () => void;
}
export default function ThankyouPage({ onReturn }:Props) {
    return (
    <div className="h-full flex flex-col items-stretch gap-2">
      <div className="h-12 flex items-center gap-1">
        <button type="button" onClick={onReturn} className="btn btn-ghost">
          <FontAwesomeIcon icon={faArrowLeft} className="text-2xl" />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center">
          <FontAwesomeIcon icon={faCheckCircle} className="text-success text-8xl" />
          <span className="font-bold text-lg pt-2">Your booking has been confirmed!</span>
          <span className="font-bold text-sm">Have a safe trip!</span>
      </div>
    </div>
    )
}