import { Link } from "react-router-dom";

const NoData = ({ pageInfo }) => {
  return (
    <div className="flex-column flex-center">
      <img
        src="/assets/images/empty.svg"
        className="responsive no-data"
        loading="lazy"
        alt="No data"
      />
      <span className="text-md">
        No products in {pageInfo}.
        {pageInfo !== "Product List" && (
          <Link to="/products" className="page-heading text-sm underlined">
            Shop more products
          </Link>
        )}
      </span>
    </div>
  );
};
export { NoData };
