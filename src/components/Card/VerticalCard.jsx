import { Link } from "react-router-dom";
import { useCart, useToast } from "../../context";
import {
  addToCartHandler,
  addToWishlistHandler,
  removeFromWishlistHandler,
} from "../../services";

const VerticalCard = ({ product }) => {
  const { cartState, cartDispatch } = useCart();
  const { toastDispatch } = useToast();
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
              addToCartHandler(product, cartDispatch, toastDispatch)
            }
          >
            Add To Cart
          </button>
        )}
        <button className="btn-action hide secondary">Move to Cart</button>
        <button className="btn-action-horizontal-hide secondary">
          Remove from wishlist
        </button>
        <button className="card-badge flex-center">
          {cartState.wishlistItems.some((item) => item._id === product._id) ? (
            <i
              className="fas fa-heart"
              onClick={() =>
                removeFromWishlistHandler(product, cartDispatch, toastDispatch)
              }
            ></i>
          ) : (
            <i
              className="far fa-heart"
              onClick={() =>
                addToWishlistHandler(product, cartDispatch, toastDispatch)
              }
            ></i>
          )}
        </button>
      </div>
    </div>
  );
};
export { VerticalCard };
