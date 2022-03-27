import { CartProduct } from "../../components";
import { useCart } from "../../context";
import { setTitle } from "../../utils/set-title";
const Cart = () => {
  const title = "The Red Closet | Cart";
  setTitle(title);
  const { cartState } = useCart();
  const totalCartAmount = Number(cartState.totalPrice) + 499;
  return (
    <main className="outer-wrapper">
      <section className="display-screen">
        {cartState.itemsInCart.map(
          (item) =>
            item.quantity > 0 && <CartProduct product={item} key={item._id} />
        )}
        {cartState.quantity > 0 ? (
          <div className="text-card-container card">
            <div className="card-inner-container">
              <div className="card-body padding-sm">
                <div className="card-title text-left">Price Details</div>
                <div className="card-desc flex-column">
                  <hr className="full-width" />
                  <div className="flex-spbt">
                    <span className="items">
                      Price {`(${cartState.quantity} items)`}
                    </span>
                    <span className="price">{` $${cartState.totalPrice} `}</span>
                  </div>
                  <div className="flex-spbt">
                    <span className="discount">Discount</span>
                    <span className="price">
                      - {` $ ${cartState.totalDiscountedPrice} `}
                    </span>
                  </div>
                  <div className="flex-spbt">
                    <span className="delivery">Delivery Charges</span>
                    <span className="price">$499</span>
                  </div>
                  <hr className="full-width" />
                  <div className="flex-spbt">
                    <span className="total">Total Amount</span>
                    <span className="price">{` $ ${totalCartAmount} `}</span>
                  </div>
                  <hr className="full-width" />
                  <span className="items">
                    You will save {` $ ${cartState.totalDiscountedPrice} `} on
                    this order
                  </span>
                  <button className="full-width btn btn-primary">
                    Place Order
                  </button>
                </div>
              </div>
              <div className="hide-overlay"> Women</div>
            </div>
            <div className="hide">
              <button className=" btn-action flex-center">Add to Cart</button>
              <button className="btn-action-horizontal secondary">
                Remove from wishlist
              </button>
              <span className="dismiss flex-center">
                <button className="card-btn-close">
                  <i className="fas fa-times-circle close"></i>
                </button>
              </span>
            </div>
          </div>
        ) : (
          <h1>No items in Cart</h1>
        )}
      </section>
    </main>
  );
};

export { Cart };
