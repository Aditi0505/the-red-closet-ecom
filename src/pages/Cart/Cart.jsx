import { useEffect } from "react";
import { CartProduct } from "../../components";
import { useCart, useToast, useAuth } from "../../context";
import { setTitle } from "../../utils/set-title";
import axios from "axios";
const Cart = () => {
  const title = "The Red Closet | Cart";
  setTitle(title);
  const { cartState } = useCart();
  const { toastDispatch } = useToast();
  const { authState } = useAuth();
  const totalCartAmount = Number(cartState.totalPrice) + 499;

  useEffect(() => {
    toastDispatch({ type: "HIDE", payload: "" });
    cartState.itemsInCart.length <= 0 &&
      toastDispatch({ type: "SHOW", payload: "No items added in the cart" });
    (async () => {
      try {
        await axios.get("/api/user/cart", {
          headers: {
            authorization: authState.encodedToken,
          },
        });
      } catch {
        toastDispatch({
          type: "SHOW",
          payload: "No items to show in the cart at the moment",
        });
      }
    })();
  }, [cartState.itemsInCart.length, toastDispatch, authState.encodedToken]);

  return (
    <main className="outer-wrapper">
      {cartState.itemsInCart.length > 0 ? (
        <section className="display-screen">
          {cartState.itemsInCart.map(
            (item) =>
              item.quantity > 0 && <CartProduct product={item} key={item._id} />
          )}
          {cartState.quantity > 0 && cartState.itemsInCart.length > 0 && (
            <div className="text-card-container card">
              <div className="card-inner-container">
                <div className="card-body padding-sm">
                  <div className="card-title text-left">Price Details</div>
                  <div className="card-desc flex-column">
                    <hr className="full-width" />
                    <div className="flex-spbt">
                      <span className="items">
                        Price {`(${cartState.itemsInCart.length} items)`}
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
          )}
        </section>
      ) : (
        ""
      )}
    </main>
  );
};

export { Cart };
