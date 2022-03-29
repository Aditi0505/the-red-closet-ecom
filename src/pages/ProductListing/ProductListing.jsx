import { VerticalCard, FilterButton, Filter } from "../../components";
import { useToast, useFilter } from "../../context";
import { useState, useEffect } from "react";
import { setTitle } from "../../utils/set-title";
import axios from "axios";
import { useLocation } from "react-router-dom";
import {
  getRatedProducts,
  getSortedProducts,
  getCheckedProducts,
  getPricedProducts,
  getSearchedProducts,
} from "../../utils";

const ProductListing = () => {
  const location = useLocation();
  const categoryName = location.state;
  const { dispatch } = useToast();
  const { filterState, filterDispatch } = useFilter();
  const [productList, setProductList] = useState([]);
  const title = "The Red Closet | Products";
  const searchedProducts = getSearchedProducts(filterState, productList);
  const pricedProducts = getPricedProducts(filterState, searchedProducts);
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
        dispatch({ type: "hide", payload: "" });
        filterDispatch({
          type: "FILTER_BY_CATEGORY",
          payload: categoryName,
        });
      } catch {
        dispatch({ type: "show", payload: "Cannot fetch data right now." });
      }
    })();
  }, [dispatch, filterDispatch, categoryName]);

  return (
    <div>
      <Filter />
      <main className="outer-wrapper flex-spbt product-listing">
        <div className="display-screen">
          {sortedProductList.map((product) => (
            <VerticalCard product={product} key={product._id} />
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
