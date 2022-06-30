import { useEffect } from "react";
import { Address, CartProduct, NoData } from "../../components";
import { useCart, useAuth, useOrder } from "../../context";
import { setTitle } from "../../utils/set-title";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const Cart = () => {
  const title = "The Red Closet | Cart";
  setTitle(title);
  const { cartState } = useCart();
  const { authState } = useAuth();
  const { orderState } = useOrder();
  const totalCartAmount = Number(cartState.totalPrice) + 499;
  useEffect(() => {
    (async () => {
      try {
        await axios.get("/api/user/cart", {
          headers: {
            authorization: authState.encodedToken,
          },
        });
      } catch {
        toast.error("No items to show in the cart at the moment");
      }
    })();
  }, [cartState.itemsInCart.length, authState.encodedToken]);

  return (
    <main
      className={`outer-wrapper page-height ${
        cartState.itemsInCart.length > 0 && "flex-center"
      }`}
    >
      {cartState.itemsInCart.length > 0 ? (
        <section className="display-screen cart-wrapper">
          <section className="flex-column">
            <Address />
            {cartState.itemsInCart.map(
              (item) =>
                item.quantity > 0 && (
                  <CartProduct product={item} key={item._id} />
                )
            )}
          </section>

          {cartState.quantity > 0 && cartState.itemsInCart.length > 0 && (
            <div className="text-card-container card border-rd2">
              <div className="card-inner-container border-rd2">
                <div className="card-body padding-sm">
                  <div className="card-title text-left">Price Details</div>
                  <div className="card-desc flex-column">
                    <hr className="full-width" />
                    <div className="flex-spbt">
                      <span className="items">
                        Price {`(${cartState.itemsInCart.length} items)`}
                      </span>
                      <span className="price">{` ₹${cartState.totalPrice} `}</span>
                    </div>
                    <div className="flex-spbt">
                      <span className="discount">Discount</span>
                      <span className="price">
                        - {` ₹ ${cartState.totalDiscountedPrice} `}
                      </span>
                    </div>
                    <div className="flex-spbt">
                      <span className="delivery">Delivery Charges</span>
                      <span className="price">₹499</span>
                    </div>
                    <hr className="full-width" />
                    <div className="flex-spbt">
                      <span className="total">Total Amount</span>
                      <span className="price">{` ₹ ${totalCartAmount} `}</span>
                    </div>
                    <hr className="full-width" />
                    <span className="items">
                      You will save {` ₹ ${cartState.totalDiscountedPrice} `} on
                      this order
                    </span>
                    {orderState.currentAddress ? (
                      <Link
                        to="/checkout"
                        className="full-width btn btn-primary"
                      >
                        Checkout
                      </Link>
                    ) : (
                      <>
                        <Link
                          to="/checkout"
                          className="full-width btn btn-disabled-primary"
                        >
                          Checkout
                        </Link>
                        <span className="error-style">
                          Please select address to proceed
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      ) : (
        <NoData pageInfo={"Cart"} />
      )}
    </main>
  );
};

export { Cart };
