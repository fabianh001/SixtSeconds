export default function SecondPage() {
  return (
    <>
      <span className="text-lg mt-4 mb-5">
        <b className="text-warning">Select your car</b>
      </span>

      <div className="card bordered mr-5 ml-5">
        <figure>
          <img src="https://emoove.net/wp-content/uploads/2018/12/Waymo-Autonom-Auto-Autonom-Taxi-waymo-one-home_car_firefly.png"/> </figure>
        <div className="card-body">
          <span className="text-lg">
            <b className="text-warning">Tesla</b> Model 3
          </span>
          <span className="text-md">
            Available in <b className="text-error">5 min</b>
          </span>
          <span className="text-md">
            Base price of only <b className="text-error">14€</b>
          </span>
          <div className="justify-end card-actions">
            <button className="btn btn-main">Book now</button>
          </div>
        </div>
      </div>

      <div className="card bordered mr-5 ml-5 mb-20">
        <figure>
          <img src="https://t3n.de/news/wp-content/uploads/2020/10/tesla-model-3-teaser.jpg" />
        </figure>
        <div className="card-body">
          <span className="text-lg">
            <b className="text-warning">Tesla</b> Model 3
          </span>
          <span className="text-md">
            Available in <b className="text-error">5 min</b>
          </span>
          <span className="text-md">
            Base price of only <b className="text-error">14€</b>
          </span>
          <div className="justify-end card-actions">
            <button className="btn btn-main">Book now</button>
          </div>
        </div>
      </div>

      <div className="card bordered mr-5 ml-5">
        <figure>
          <img src="https://img.cargate360.de/default.aspx?vid=5568550&bid=1359&format=xl&ino=4&App=Euler-Group-Bmw" />
        </figure>
        <div className="card-body">
          <span className="text-lg">
            <b className="text-warning">Tesla</b> Model 3
          </span>
          <span className="text-md">
            Available in <b className="text-error">5 min</b>
          </span>
          <span className="text-md">
            Base price of only <b className="text-error">14€</b>
          </span>
          <div className="justify-end card-actions">
            <button className="btn btn-main">Book now</button>
          </div>
        </div>
      </div>
    </>
  );
}
