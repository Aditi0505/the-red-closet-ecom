import { Link } from "react-router-dom";
import { useCart } from "../../context";

const VerticalCard = ({ product }) => {
  const { cartState, cartDispatch } = useCart();
  return (
    <div className="card">
      <div className="card-inner-container">
        <div className="card-image">
          <img src={product.image} alt={`${product.image}`} className="img" />
        </div>
        <div className="card-body">
          <div className="card-title">{product.title}</div>
          <div className="card-desc">{`$ ${product.price}`}</div>
          <div className="card-desc">
            {[...Array(5)].map((item, i) =>
              i + 1 > product.rating ? (
                <i className="far fa-star" key={i}></i>
              ) : (
                <i className="fas fa-star enabled" key={i}></i>
              )
            )}
          </div>
        </div>
        <div className="hide-overlay">Women</div>
      </div>

      <div className="icons">
        {cartState.itemsInCart.some((i) => i._id === product._id) &&
        cartState.quantity > 0 ? (
          <Link to="/cart" className="flex-center full-width">
            <button className="btn-primary btn flex-center full-width padding-xs margin">
              Go To Cart
            </button>
          </Link>
        ) : (
          <button
            className="btn-primary btn flex-center full-width padding-xs margin"
            onClick={() =>
              cartDispatch({
                type: "ADD_TO_CART",
                payload: product,
              })
            }
          >
            Add To Cart
          </button>
        )}
        <button className="btn-action hide secondary">Move to Cart</button>
        <button className="btn-action-horizontal-hide secondary">
          Remove from wishlist
        </button>
        <span className="card-badge flex-center">
          <i className="far fa-heart"></i>
        </span>
      </div>
    </div>
  );
};
export { VerticalCard };
