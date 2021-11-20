
type InsuranceItem = {
    delay: number;
    refundPercentage: number;
}
type Props = {
    title: string;
    price: number;
    insuranceItems: InsuranceItem[];
}
export default function InsuranceOfferTile() {
    return (
        <div className="collapse w-full border rounded-box border-base-300 collapse-arrow m-2">
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
    )
}