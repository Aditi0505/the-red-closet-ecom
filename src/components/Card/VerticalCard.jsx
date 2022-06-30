import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth, useCart } from "../../context";
import {
  addToCartHandler,
  addToWishlistHandler,
  removeFromWishlistHandler,
} from "../../services";

const VerticalCard = ({ product }) => {
  const { cartState, cartDispatch } = useCart();
  const { authState } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="card border-rd2">
      <div className="card-inner-container border-rd2">
        <div className="card-image border-rd2">
          <img
            src={product.image}
            alt={`${product.image}`}
            className="img border-rd2"
          />
        </div>
        <div className="card-body">
          <div className="card-title">{product.title}</div>
          <div className="card-desc">{`₹ ${product.price}`}</div>
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
              authState.encodedToken
                ? addToCartHandler(product, authState, cartDispatch, toast)
                : navigate("/login")
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
                removeFromWishlistHandler(
                  product,
                  authState,
                  cartDispatch,
                  toast
                )
              }
            ></i>
          ) : (
            <i
              className="far fa-heart"
              onClick={() =>
                authState.encodedToken
                  ? addToWishlistHandler(
                      product,
                      authState,
                      cartDispatch,
                      toast
                    )
                  : navigate("/login")
              }
            ></i>
          )}
        </button>
      </div>
    </div>
  );
};
export { VerticalCard };
