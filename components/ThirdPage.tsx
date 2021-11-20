import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

type Props = {
  onReturn: () => void;
}
export default function ThirdPage({ onReturn }: Props) {
  return (
    <div className="h-full flex flex-col items-stretch gap-2">
      <div className="h-12 flex items-center gap-1">
        <button type="button" onClick={onReturn} className="btn btn-ghost">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
          <span className="text-xl">
              <b className="">Insurance Options</b>
          </span>
      </div>

      {/* Checkboxes */}

      <div className="flex ">
        <div className="collapse w-96 border rounded-box border-base-300 collapse-arrow m-2">
          <input type="checkbox" />
          <div className="collapse-title text-xl">
            <div className="px-2 h-12 flex items-center justify-between">
              <span className="text-xl font-medium">
                Select car with
                <b className="text-warning"> 100%</b> in-time insurance
              </span>
            </div>
          </div>
          <div className="collapse-content">
            <ul className="menu">
              <li className="menu-title"></li>
              <li>Car will arrive exactly at 14:45</li>
              <li>You will arrive at 15:15 </li>
              <li>You get 100% refund if the car is too late</li>
            </ul>
            <button className="btn btn-block">Add now for 3€</button>
          </div>
        </div>

        <div className="collapse w-96 border rounded-box border-base-300 collapse-arrow m-2">
          <input type="checkbox" />
          <div className="collapse-title ">
          <div className="px-2 h-12 flex items-center justify-between">
              <span className="text-xl font-medium">
                Select car with
                <b className="text-warning"> 50%</b> in-time insurance
              </span>
            </div>
          </div>
          <div className="collapse-content">
            <p>
              Collapse content reveals with focus. If you add a checkbox, you
              can control it using checkbox instead of focus. Or you can
              force-open/force-close using
              <span className="badge badge-outline">collapse-open</span> and
              <span className="badge badge-outline">collapse-close</span>{" "}
              classes.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-box shadow-xl">Total: 43€</div>
      <button className="btn btn-block">Order now!</button>
    </div>
  );
}
