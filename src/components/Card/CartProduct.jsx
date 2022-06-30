import { useAuth, useCart } from "../../context";
import {
  decreaseQuantityHandler,
  increaseQuantityHandler,
  moveToWishlistHandler,
  removeFromCartHandler,
} from "../../services";
import { toast } from "react-toastify";
const CartProduct = ({ product }) => {
  const { cartDispatch } = useCart();
  const { authState } = useAuth();
  return (
    <div className="card-container-horizontal border-rd2">
      <div className="card-inner-container-horizontal border-rd2">
        <div className="horizontal-card-image border-rd2">
          <img
            src={product.image}
            alt={product.image}
            className="img-horizontal border-rd2"
          />
        </div>
        <div className="flex-center card-body-horizontal">
          <div className="card-title-horizontal">{product.title}</div>
          <div className="card-desc-horizontal">
            {`₹ ${product.price} `}
            <span className="striked">{product.originalPrice}</span>
          </div>
          <div className="card-desc-horizontal">50% off</div>
          <div className="flex-center text-sm dark-shade">
            Quantity:
            {product.quantity === 1 ? (
              <button
                disabled
                className="btn btn-icon"
                onClick={() =>
                  decreaseQuantityHandler(
                    product,
                    authState,
                    cartDispatch,
                    toast
                  )
                }
              >
                <i className="fas fa-minus"></i>
              </button>
            ) : (
              <button
                className="btn btn-icon"
                onClick={() =>
                  decreaseQuantityHandler(
                    product,
                    authState,
                    cartDispatch,
                    toast
                  )
                }
              >
                <i className="fas fa-minus"></i>
              </button>
            )}
            <span>{product.quantity}</span>
            <button
              className="btn btn-icon"
              onClick={() =>
                increaseQuantityHandler(product, authState, cartDispatch, toast)
              }
            >
              <i className="fa fa-plus"></i>
            </button>
          </div>
          <div className="display-icons">
            <button
              className="full-width btn btn-secondary"
              onClick={() =>
                removeFromCartHandler(product, authState, cartDispatch, toast)
              }
            >
              Remove from Cart
            </button>
            <button
              className="full-width btn btn-outline-secondary"
              onClick={() =>
                moveToWishlistHandler(product, authState, cartDispatch, toast)
              }
            >
              Move to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export { CartProduct };
