import { useEffect, useState } from "react";
import axios from "axios";
import { useToast } from "../../context/toast-context";
import { Checkbox } from "../Checkbox/Checkbox";
import { RadioButton } from "../RadioButton/RadioButton";

const priceRangeList = [0, 250, 500];

const ratingList = ["4", "3", "2", "1"];

const sortList = ["Low to High", "High to Low"];
const Filter = () => {
  const { dispatch } = useToast();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        setCategories(response.data.categories);
      } catch {
        dispatch({ type: "show" });
      }
    })();
  }, [dispatch]);

  return (
    <aside className="outer-wrapper">
      <section className="screen filter-wrapper">
        <div className="flex-column margin-right">
          <ul className="list-style-none flex-column">
            <li className="list-item">
              <div>
                <span className="ft-bolder">Filters</span>
                <span className="margin-left underlined">
                  <button className="btn btn-link">Clear</button>
                </span>
              </div>
            </li>
            <li className="list-item">
              <div className="flex-column">
                <span className="ft-bolder">Price</span>
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
                  className="full-width"
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
                    {ratingList.map((item, index) => (
                      <div key={index}>
                        <RadioButton
                          value={`${item} Stars & above`}
                          name="rating"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>
            <li className="list-item">
              <div className="flex-column">
                <span className="ft-bolder">Sort By</span>
                <div>
                  <div>
                    {sortList.map((item, index) => (
                      <div key={index}>
                        <RadioButton value={`Price- ${item}`} name="sort" />
                      </div>
                    ))}
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
