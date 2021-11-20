
type InsuranceItem = {
  delay: number;
  refundPercentage: number;
}
type Props = {
    title: string;
    price: number;
  selected?: boolean;
  onSelect: () => void;
    insuranceItems: InsuranceItem[];
}
export default function InsuranceOfferTile({
  title,
  onSelect,
  selected,
  price,
  insuranceItems
}: Props) {
  const promoItem = insuranceItems[0];
    return (
      <div className="flex items-center">
        <div className="flex-1 collapse w-full rounded-box border-base-300 collapse-arrow m-2">
          <input type="checkbox" />
          <div className="collapse-title text-xl">
            <div className="px-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-12 text-2xl font-medium text-success">
                {price}€
              </span>
              <div className="flex flex-col font-medium">
                <span className="font-medium text-2xl">{title}</span>
                <span className="text-xs uppercase">
                  Delay <b>{promoItem.delay}</b> minutes onwards: <b className="text-warning font-bold">{promoItem.refundPercentage}%</b> refund.
                </span>
              </div>
              </div>
            </div>
        </div>
        {
          insuranceItems.length > 1 && (
          <div className="collapse-content">
            <ul className="flex flex-col items-stretch">
            <li>With:</li>
            {
              insuranceItems.slice(1).map(item => (
                <li key={item.delay}>
                  Delay <b>{item.delay}</b> minutes onwards: <b className="text-warning">{item.refundPercentage}%</b> refund.
                </li>
              ))
            }
            </ul>
          </div>
          )
        }
        </div>
        <input type="checkbox" onClick={onSelect} checked={selected} className="checkbox checkbox-warning" />
      </div>
    )
}