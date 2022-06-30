import { VerticalCard, FilterButton, Filter, NoData } from "../../components";
import { useFilter } from "../../context";
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
import { toast } from "react-toastify";
const ProductListing = () => {
  const location = useLocation();
  const categoryName = location.state;
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
        filterDispatch({
          type: "FILTER_BY_CATEGORY",
          payload: categoryName,
        });
      } catch {
        toast.error("Cannot display products right now.");
      }
    })();
  }, [filterDispatch, categoryName]);

  return (
    <div>
      <Filter />
      <main className="outer-wrapper product-listing">
        {sortedProductList.length > 0 ? (
          <section className="display-screen">
            {sortedProductList.map((product) => (
              <VerticalCard product={product} key={product._id} />
            ))}
          </section>
        ) : (
          <NoData pageInfo={"Product List"} />
        )}
        <div className="filter-buttons">
          <FilterButton value="Sort" />
          <FilterButton value="Filter" />
        </div>
      </main>
    </div>
  );
};

export { ProductListing };
