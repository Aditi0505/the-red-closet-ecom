import { VerticalCard, FilterButton, Filter } from "../../components";
import { useToast, useFilter } from "../../context";
import { useState, useEffect } from "react";
import { setTitle } from "../../utils/set-title";
import axios from "axios";
import {
  getRatedProducts,
  getSortedProducts,
  getCheckedProducts,
  getPricedProducts,
} from "../../utils";

const ProductListing = () => {
  const { dispatch } = useToast();
  const { filterState } = useFilter();
  const [productList, setProductList] = useState([]);
  const title = "The Red Closet | Products";
  const pricedProducts = getPricedProducts(filterState, productList);
  const ratedProducts = getRatedProducts(filterState, pricedProducts);
  const checkedProductList = getCheckedProducts(filterState, ratedProducts);
  const sortedProductList = getSortedProducts(filterState, checkedProductList);
  setTitle(title);
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { products },
        } = await axios.get("/api/products");
        setProductList(products);
      } catch {
        dispatch({ type: "show" });
      }
    })();
  }, [dispatch]);

  return (
    <div>
      <Filter />
      <main className="outer-wrapper flex-spbt product-listing">
        <div className="display-screen">
          {sortedProductList.map(({ _id, image, title, price }) => (
            <VerticalCard image={image} title={title} msg={price} key={_id} />
          ))}
        </div>
        <div className="filter-buttons">
          <FilterButton value="Sort" />
          <FilterButton value="Filter" />
        </div>
      </main>
    </div>
  );
};

export { ProductListing };
