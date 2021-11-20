import { faShoppingBag, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VehicleType } from "../types/Vehicle"

type Props = {
  carModel: VehicleType;
  onSelect: () => void;
}

type Texts = {
    brand: string;
    model: string;
    img: string;
};
const TEXTS_RECORD: Record<VehicleType, Texts> = {
    [VehicleType.BMW]: {
        brand: "BMW",
        model: "i3",
        img:"/img/Mobileye_Robotaxi_-_Sixt_App_cut.png",
    },
    [VehicleType.TESLA]: {
        brand: "Tesla",
        model: "Model 3",
        img:"https://im-efahrer.chip.de/files/601023154b2b8-tesla-model-3-front.png?imPolicy=IfOrientation&width=1200&height=630&color=%23000000&hash=051ebff6b28d649a0a6a1d6d49cb73b2a11ada7cc94dc65964ff6813817ff7b2"
    },
    [VehicleType.WAYMO]: {
        brand: "Waymo",
        model: "Autonomous",
        img:"/img/Vortex-GTASA-front.png",
    },
}
export default function CarOption({ carModel, onSelect }:Props) {
    const texts = TEXTS_RECORD[carModel];

  return (
      <div className="flex items-center gap-2" >
        <div className="flex bg-base-200 flex-1 rounded-lg px-2 py-4 items-center bordered shadow-xl gap-2">
        <img src={texts.img} className="h-12 w-1/5" />
        <div className="flex flex-1 flex-col gap-1">
            <span className="text-lg font-bold">
              <b className="text-warning">{texts.brand}</b> {texts.model}
            </span>
            <span className="text-sm leading-3">
              Available in <b className="text-error">5 min</b>
            </span>
            <span className="text-sm leading-3">
              Base price of only <b className="text-error">14€</b>
            </span>
          </div>
        </div>
        <div>
        <button type="button" onClick={onSelect} className="btn btn-main flex gap-1">
          <FontAwesomeIcon icon={faShoppingCart} />
          Book now
        </button>
        </div>
      </div>
    )
}