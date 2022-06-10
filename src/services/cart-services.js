import axios from "axios";

export const addToCartHandler = async (
  product,
  authState,
  cartDispatch,
  toastDispatch
) => {
  try {
    //api
    await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: {
          authorization: authState.encodedToken,
        },
      }
    );
    cartDispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
    toastDispatch({
      type: "SHOW",
      payload: "Product added to the cart.",
    });
  } catch (e) {
    toastDispatch({
      type: "SHOW",
      payload: "Cannot add to cart right now.",
    });
  }
};

export const increaseQuantityHandler = async (
  product,
  authState,
  cartDispatch,
  toastDispatch
) => {
  try {
    //api
    await axios.post(
      `/api/user/cart/${product._id}`,
      {
        action: {
          type: "increment",
        },
      },
      {
        headers: {
          authorization: authState.encodedToken,
        },
      }
    );
    cartDispatch({
      type: "INCREASE_CART_QUANTITY",
      payload: product,
    });
  } catch (e) {
    toastDispatch({
      type: "SHOW",
      payload: "Cannot increase quantity right now.",
    });
  }
};

export const decreaseQuantityHandler = async (
  product,
  authState,
  cartDispatch,
  toastDispatch
) => {
  try {
    //api
    await axios.post(
      `/api/user/cart/${product._id}`,
      {
        action: {
          type: "decrement",
        },
      },
      {
        headers: {
          authorization: authState.encodedToken,
        },
      }
    );
    cartDispatch({
      type: "DECREASE_CART_QUANTITY",
      payload: product,
    });
  } catch (e) {
    toastDispatch({
      type: "SHOW",
      payload: "Cannot decrease quantity right now.",
    });
  }
};

export const removeFromCartHandler = async (
  product,
  authState,
  cartDispatch,
  toastDispatch
) => {
  try {
    //api
    await axios.delete(`/api/user/cart/${product._id}`, {
      headers: {
        authorization: authState.encodedToken,
      },
    });
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  } catch (e) {
    toastDispatch({
      type: "SHOW",
      payload: "Cannot remove from cart right now.",
    });
  }
};

export const addToWishlistHandler = async (
  product,
  authState,
  cartDispatch,
  toastDispatch
) => {
  try {
    //api
    await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: {
          authorization: authState.encodedToken,
        },
      }
    );
    cartDispatch({
      type: "ADD_TO_WISHLIST",
      payload: product,
    });
    toastDispatch({
      type: "SHOW",
      payload: "Product added to the wishlist.",
    });
  } catch (e) {
    toastDispatch({
      type: "SHOW",
      payload: "Cannot add to wishlist right now.",
    });
  }
};

export const removeFromWishlistHandler = async (
  product,
  authState,
  cartDispatch,
  toastDispatch
) => {
  try {
    //api
    await axios.delete(`/api/user/wishlist/${product._id}`, {
      headers: {
        authorization: authState.encodedToken,
      },
    });
    cartDispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: product,
    });
  } catch (e) {
    toastDispatch({
      type: "SHOW",
      payload: "Cannot remove from wishlist right now.",
    });
  }
};

export const moveToWishlistHandler = async (
  product,
  authState,
  cartDispatch,
  toastDispatch
) => {
  try {
    //api
    await axios.delete(`/api/user/cart/${product._id}`, {
      headers: {
        authorization: authState.encodedToken,
      },
    });
    await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: {
          authorization: authState.encodedToken,
        },
      }
    );
    cartDispatch({
      type: "MOVE_TO_WISHLIST",
      payload: product,
    });
  } catch (e) {
    toastDispatch({
      type: "SHOW",
      payload: "Cannot remove from wishlist right now.",
    });
  }
};
