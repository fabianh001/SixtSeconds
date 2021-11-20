export default function SecondPage() {
  return (<div className="h-2/3">
    
    <div className="px-5 h-12 flex items-center justify-between">
            <span className="text-xl">
                <b className="">Select your car</b>
            </span>
        </div>
        
    <div className="overflow-y-auto h-96  ">
      

      <div className="card bordered  ml-5 shadow-xl mb-5 w-2/3">
        <figure>
          <img src="https://emoove.net/wp-content/uploads/2018/12/Waymo-Autonom-Auto-Autonom-Taxi-waymo-one-home_car_firefly.png"/> </figure>
        <div className="card-body">
          <span className="text-lg">
            <b className="text-warning">Waymo</b> Autonomous
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

   

      <div className="card bordered mr-5 ml-5 mb-5 shadow-xl mb-2 w-2/3">
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

      <div className="card bordered mr-5 ml-5 shadow-xl mb-2 w-2/3">
        <figure>
          <img src="https://img.cargate360.de/default.aspx?vid=5568550&bid=1359&format=xl&ino=4&App=Euler-Group-Bmw" />
        </figure>
        <div className="card-body">
          <span className="text-lg">
            <b className="text-warning">BMW</b> i3
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
    </div>
    </div>
  );
}
