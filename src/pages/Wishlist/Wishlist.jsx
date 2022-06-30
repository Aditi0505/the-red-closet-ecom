import { useEffect } from "react";
import { NoData, VerticalCard } from "../../components";
import { useCart, useAuth } from "../../context";
import { setTitle } from "../../utils/set-title";
import { toast } from "react-toastify";
import axios from "axios";

const Wishlist = () => {
  const title = "The Red Closet | Wishlist";
  setTitle(title);
  const { cartState } = useCart();
  const { authState } = useAuth();
  useEffect(() => {
    (async () => {
      try {
        await axios.get("/api/user/wishlist", {
          headers: {
            authorization: authState.encodedToken,
          },
        });
      } catch {
        toast.error("No items to show in the wishlist at the moment");
      }
    })();
  }, [cartState.wishlistItems.length, authState.encodedToken]);

  return (
    <main className="outer-wrapper page-height">
      {cartState.wishlistItems?.length > 0 ? (
        <section className="display-screen cart-wrapper">
          {cartState.wishlistItems?.length > 0 &&
            cartState.wishlistItems.map((item) => (
              <VerticalCard product={item} key={item._id} />
            ))}
        </section>
      ) : (
        <NoData pageInfo={"Wishlist"} />
      )}
    </main>
  );
};

export { Wishlist };
