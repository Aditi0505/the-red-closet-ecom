import { encodedToken } from "../token";
import axios from "axios";

export const addToCartHandler = async (
  product,
  cartDispatch,
  toastDispatch
) => {
  try {
    //api
    const data = await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    cartDispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
    console.log(data);
  } catch (e) {
    toastDispatch({
      type: "SHOW",
      payload: "Cannot add to cart right now.",
    });
  }
};

export const increaseQuantityHandler = async (
  product,
  cartDispatch,
  toastDispatch
) => {
  try {
    //api
    await axios.post(
      "/api/user/cart/:productId",
      {
        action: {
          type: "increment",
        },
      },
      {
        headers: {
          authorization: encodedToken,
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
  cartDispatch,
  toastDispatch
) => {
  try {
    //api
    await axios.post(
      "/api/user/cart/:productId",
      {
        action: {
          type: "decrement",
        },
      },
      {
        headers: {
          authorization: encodedToken,
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
  cartDispatch,
  toastDispatch
) => {
  try {
    //api
    await axios.delete("/api/user/cart/:productId", {
      headers: {
        authorization: encodedToken,
      },
    });
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  } catch (e) {
    toastDispatch({
      type: "SHOW",
      payload: "Cannot delete from cart right now.",
    });
  }
};
