import { useEffect } from "react";
import { VerticalCard } from "../../components";
import { useCart, useToast } from "../../context";
import { setTitle } from "../../utils/set-title";
const Wishlist = () => {
  const title = "The Red Closet | Wishlist";
  setTitle(title);
  const { cartState } = useCart();
  const { dispatch } = useToast();
  console.log("wishlist", cartState.wishlistItems);
  useEffect(() => {
    dispatch({ type: "hide", payload: "" });
    cartState.wishlistItems.length <= 0 &&
      dispatch({ type: "show", payload: "No items added in the wishlist" });
  }, [cartState.wishlistItems.length, dispatch]);
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
