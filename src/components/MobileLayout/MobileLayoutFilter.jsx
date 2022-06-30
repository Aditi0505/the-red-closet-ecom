import { useEffect, useState } from "react";
import { useFilter } from "../../context";
import { Rating } from "../Rating/Rating";
import axios from "axios";
import { toast } from "react-toastify";
import { Checkbox } from "../Checkbox/Checkbox";
const MobileLayoutFilter = ({ inputHandler }) => {
  const priceRangeList = [0, 3000, 7000];
  const { filterState, filterDispatch } = useFilter();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        setCategories(response.data.categories);
      } catch {
        toast.error("Cannot display categories right now.");
      }
    })();
  }, []);
  return (
    <section className="z-index background full-width mobileView">
      <div className="passwordBox">
        <ul className="list-style-none flex-column">
          <li className="list-item">
            <div>
              <span className="ft-bolder">Filters</span>
              <span className="margin-left underlined">
                <button
                  className="btn btn-link"
                  onClick={() =>
                    filterDispatch({
                      type: "CLEAR",
                    })
                  }
                >
                  Clear
                </button>
              </span>
            </div>
          </li>
          <li className="list-item">
            <div className="flex-column">
              <label htmlFor="priceRange" className="ft-bolder">
                Price
              </label>
              <div className="flex-spbt">
                {priceRangeList.map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </div>
            </div>
          </li>
          <li className="list-item">
            <div>
              <input
                type="range"
                name="priceRange"
                id="priceRange"
                min="0"
                max="7000"
                step="500"
                className="full-width"
                value={filterState.price}
                onChange={(e) =>
                  filterDispatch({
                    type: "FILTER_BY_PRICE",
                    payload: Number(e.target.value),
                  })
                }
              />
            </div>
          </li>
          <li className="list-item">
            <div className="flex-column">
              <span className="ft-bolder">Category</span>
              <div>
                {categories.map((item, index) => (
                  <div key={index}>
                    <Checkbox
                      categoryName={item.categoryName}
                      name={item.categoryName}
                      id={item.categoryName}
                      type="FILTER_BY_CATEGORY"
                      payload={item.categoryName}
                    />
                  </div>
                ))}
              </div>
            </div>
          </li>
          <li className="list-item">
            <div className="flex-column">
              <span className="ft-bolder">Rating</span>
              <div>
                <div>
                  <div>
                    <Rating
                      value={`4 Stars & above`}
                      name="rating"
                      type="RATING"
                      payload={4}
                    />
                  </div>
                  <div>
                    <Rating
                      value={`3 Stars & above`}
                      name="rating"
                      type="RATING"
                      payload={3}
                    />
                  </div>
                  <div>
                    <Rating
                      value={`2 Stars & above`}
                      name="rating"
                      type="RATING"
                      payload={2}
                    />
                  </div>
                  <div>
                    <Rating
                      value={`1 Star & above`}
                      name="rating"
                      type="RATING"
                      payload={1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <button className="card-badge flex-center">
          <i
            className="fas fa-times"
            onClick={() => inputHandler("Filter")}
          ></i>
        </button>
      </div>
    </section>
  );
};

export { MobileLayoutFilter };
