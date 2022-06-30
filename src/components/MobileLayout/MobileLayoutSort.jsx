import { RadioButton } from "../RadioButton/RadioButton";

const MobileLayoutSort = ({ inputHandler }) => {
  return (
    <section className="z-index background full-width mobileView">
      <div className="passwordBox">
        <ul className="list-style-none flex-column">
          <li className="list-item">
            <div className="flex-column">
              <span className="ft-bolder">Sort By</span>
              <div>
                <div>
                  <div>
                    <RadioButton
                      value={`Price- Low to High`}
                      name="sortBy"
                      type="SORT"
                      payload="LOW_TO_HIGH"
                    />
                  </div>
                  <div>
                    <RadioButton
                      value={`Price- High to Low`}
                      name="sortBy"
                      type="SORT"
                      payload="HIGH_TO_LOW"
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <button className="card-badge flex-center">
          <i className="fas fa-times" onClick={() => inputHandler("Sort")}></i>
        </button>
      </div>
    </section>
  );
};

export { MobileLayoutSort };
