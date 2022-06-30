const Address = () => {
  return (
    <div className="text-card-container btn">
      <div className="card-inner-container border-rd2">
        <div className="card-body padding-sm">
          <div className="card-title flex-spbt card-text flex-column">
            <div className="flex-start gap">
              <span className="text-sm ft-bolder dark-shade padding-sm">
                Deliver to
              </span>
              <i className="far fa-angle-right"></i>
            </div>
            <div className="flex-start gap">
              <span className="text-sm ft-bolder dark-shade padding-sm">
                Aditi, Room no.411, 4th floor, Kasturba, Makkawala Road
              </span>
            </div>
            <div className="flex-start gap">
              <span className="text-sm ft-bolder dark-shade padding-sm">
                Contact: 9812345678
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Address };
