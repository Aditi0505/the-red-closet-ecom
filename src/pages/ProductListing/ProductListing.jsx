import { VerticalCard, FilterButton } from "../../components";
import { useToast } from "../../context/toast-context";
import { useState, useEffect } from "react";
import { setTitle } from "../../utils/set-title";
import axios from "axios";

const ProductListing = () => {
  const { dispatch } = useToast();
  const [productList, setProductList] = useState([]);
  const title = "The Red Closet | Products";
  setTitle(title);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/products");
        setProductList(response.data.products);
      } catch {
        dispatch({ type: "show" });
      }
    })();
  }, [dispatch]);

  return (
    <div>
      <main className="outer-wrapper flex-spbt product-listing">
        <div className="display-screen">
          {productList.map(({ _id, image, title, price }) => (
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
