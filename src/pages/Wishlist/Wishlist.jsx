import { useEffect } from "react";
import { VerticalCard } from "../../components";
import { useCart, useToast, useAuth } from "../../context";
import { setTitle } from "../../utils/set-title";
import axios from "axios";

const Wishlist = () => {
  const title = "The Red Closet | Wishlist";
  setTitle(title);
  const { cartState } = useCart();
  const { toastDispatch } = useToast();
  const { authState } = useAuth();
  useEffect(() => {
    toastDispatch({ type: "HIDE", payload: "" });
    cartState.wishlistItems.length <= 0 &&
      toastDispatch({
        type: "SHOW",
        payload: "No items added in the wishlist",
      });
    (async () => {
      try {
        await axios.get("/api/user/wishlist", {
          headers: {
            authorization: authState.encodedToken,
          },
        });
      } catch {
        toastDispatch({
          type: "SHOW",
          payload: "No items to show in the wishlist at the moment",
        });
      }
    })();
  }, [cartState.wishlistItems.length, toastDispatch, authState.encodedToken]);

  return (
    <main className="outer-wrapper flex-spbt">
      <section className="display-screen">
        {cartState.wishlistItems.map((item) => (
          <VerticalCard product={item} key={item._id} />
        ))}
      </section>
    </main>
  );
};

export { Wishlist };
