export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        quantity: state.quantity + 1,
        totalPrice: state.totalPrice + Number(action.payload.price),
        totalDiscountedPrice:
          state.totalDiscountedPrice + Number(action.payload.originalPrice),
        itemsInCart: [{ ...action.payload, quantity: 1 }, ...state.itemsInCart],
      };

    case "INCREASE_CART_QUANTITY":
      return {
        ...state,
        quantity: state.quantity + 1,
        totalPrice: state.totalPrice + Number(action.payload.price),
        totalDiscountedPrice:
          state.totalDiscountedPrice + Number(action.payload.originalPrice),
        itemsInCart: state.itemsInCart.map((item) =>
          item._id === action.payload._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        quantity: state.quantity - 1,
        totalPrice: state.totalPrice - Number(action.payload.price),
        totalDiscountedPrice:
          state.totalDiscountedPrice - Number(action.payload.originalPrice),
        itemsInCart: state.itemsInCart.filter(
          (item) => item._id !== action.payload._id
        ),
      };
    case "DECREASE_CART_QUANTITY":
      return {
        ...state,
        quantity: state.quantity - 1,
        totalPrice: state.totalPrice - Number(action.payload.price),
        totalDiscountedPrice:
          state.totalDiscountedPrice - Number(action.payload.originalPrice),
        itemsInCart: state.itemsInCart.map((item) =>
          item._id === action.payload._id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    default:
      return state;
  }
};
