import { useEffect, useState } from "react";
import axios from "axios";
import { useToast, useFilter } from "../../context";
import { Checkbox } from "../Checkbox/Checkbox";
import { RadioButton } from "../RadioButton/RadioButton";
import { Rating } from "../Rating/Rating";

const priceRangeList = [0, 3000, 7000];

const Filter = () => {
  const { toastDispatch } = useToast();
  const { filterState, filterDispatch } = useFilter();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        setCategories(response.data.categories);
      } catch {
        toastDispatch({ type: "SHOW" });
      }
    })();
  }, [toastDispatch]);

  return (
    <aside className="outer-wrapper">
      <section className="screen filter-wrapper">
        <div className="flex-column margin-right">
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
        </div>
      </section>
    </aside>
  );
};
export { Filter };
