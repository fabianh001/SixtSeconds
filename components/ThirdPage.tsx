export default function ThirdPage() {
  return (
    <>
      <div className="btn btn-main mr-10 ml-10 mt-5 mb-5 h-20">
        <div className="px-2 h-12 items-center justify-between flex flex-col mb-4">
          <span className="text-lg">
            <b className="text-warning">Cover</b> 100%
          </span>
          <span className="text-sm">
            Make 100% sure to start your trip at{" "}
            <b className="text-error">4:15pm</b>
          </span>
          <span className="text-sm">
            and arrive by <b className="text-error">4:45pm</b> for only{" "}
            <b className="text-error">5€</b>
          </span>
        </div>
      </div>

      <div className="btn btn-main mr-10 ml-10 mt-5 mb-5  h-20">
        <div className="px-2 h-12 items-center justify-between flex flex-col mb-4">
          <span className="text-lg">
            <b className="text-warning">Cover</b> 50%
          </span>
          <span className="text-sm">
            Make sure to arrive by <b className="text-error">4:45pm</b> for only{" "}
            <b className="text-error">2€</b>
          </span>
        </div>
      </div>

      <div className="btn btn-main mr-10 ml-10 mt-5 mb-5  h-20">
        <div className="px-2 h-12 items-center justify-between flex flex-col mb-4">
          <span className="text-lg">
            <b className="text-warning">No Cover</b> 
          </span>
          <span className="text-sm">
            Start when the next cap is available and arrive depending 
          </span>
          <span className="text-sm">
            on traffic without additional fee 
          </span>
        </div>
      </div>
    </>
  );
}
