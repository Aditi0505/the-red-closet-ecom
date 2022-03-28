import { useCart } from "../../context";

const CartProduct = ({ product }) => {
  const { cartDispatch } = useCart();
  return (
    <div className="card-container-horizontal">
      <div className="card-inner-container-horizontal">
        <div className="horizontal-card-image">
          <img
            src={product.image}
            alt={product.image}
            className="img-horizontal"
          />
        </div>
        <div className="flex-center card-body-horizontal">
          <div className="card-title-horizontal">{product.title}</div>
          <div className="card-desc-horizontal">
            {`$ ${product.price} `}
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
                  cartDispatch({
                    type: "DECREASE_CART_QUANTITY",
                    payload: product,
                  })
                }
              >
                <i className="fas fa-minus"></i>
              </button>
            ) : (
              <button
                className="btn btn-icon"
                onClick={() =>
                  cartDispatch({
                    type: "DECREASE_CART_QUANTITY",
                    payload: product,
                  })
                }
              >
                <i className="fas fa-minus"></i>
              </button>
            )}
            <span>{product.quantity}</span>
            <button
              className="btn btn-icon"
              onClick={() =>
                cartDispatch({
                  type: "INCREASE_CART_QUANTITY",
                  payload: product,
                })
              }
            >
              <i className="fa fa-plus"></i>
            </button>
          </div>
          <div className="display-icons">
            <button
              className="full-width btn btn-secondary"
              onClick={() =>
                cartDispatch({
                  type: "REMOVE_FROM_CART",
                  payload: product,
                })
              }
            >
              Remove from Cart
            </button>
            <button
              className="full-width btn btn-outline-secondary"
              onClick={() =>
                cartDispatch({
                  type: "MOVE_TO_WISHLIST",
                  payload: product,
                })
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
