import { useNavigate } from "react-router-dom";
import { Address, OrderCard } from "../../components";
import { useAuth, useCart, useOrder } from "../../context";
import { v4 as uuid } from "uuid";
const Checkout = () => {
  const { cartState } = useCart();
  const totalCartAmount = Number(cartState.totalPrice) + 499;
  const { authState } = useAuth();
  const { user } = authState;
  const navigate = useNavigate();
  const { orderDispatch } = useOrder();
  const RAZORPAY_URL = "https://checkout.razorpay.com/v1/checkout.js";

  const handleLoadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        reject(false);
      };
      document.body.appendChild(script);
    });
  };
  const openRazorpay = async () => {
    const response = await handleLoadScript(RAZORPAY_URL);
    console.log("response", response);
    if (!response) {
      // showToast(
      //   "Could not load razorpay payment options. Please try again later.",
      //   "error"
      // );
      console.log("Error");
      return;
    }
    const options = {
      key: "rzp_test_JPhKYo38jLZr6s",
      amount: totalCartAmount * 100,
      currency: "INR",
      name: "The Red Closet",
      description: "Enjoy the products & thanks for shopping with us.",
      handler: async function (response) {
        const data = await response;
        orderDispatch({
          type: "PLACE_ORDER",
          payload: {
            isOrdered: true,
            order_id: uuid(),
            payment_id: response.razorpay_payment_id,
          },
        });
        if (data.razorpay_payment_id) {
          navigate("/user/order-history");
        }
      },
      prefill: {
        name: user.fullName,
        email: user.email,
        contact: "9123456789",
      },
      theme: {
        color: "#C42645",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <div className="outer-wrapper">
      <div className="flex-center profile full-height display-screen flex-column">
        <div className="flex-column">
          <h1 className="text-center">Order Details</h1>
          {cartState.itemsInCart.map(
            (item) =>
              item.quantity > 0 && <OrderCard product={item} key={item._id} />
          )}
          <Address />
          {cartState.quantity > 0 && cartState.itemsInCart.length > 0 && (
            <div className="text-card-container">
              <div className="card-inner-container">
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
                    <button
                      className="full-width btn btn-primary"
                      onClick={openRazorpay}
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { Checkout };
