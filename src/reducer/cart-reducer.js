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
        wishlistItems: state.wishlistItems.filter(
          (item) => item._id !== action.payload._id
        ),
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
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlistItems:
          state.wishlistItems.length &&
          state.wishlistItems.some(({ _id }) => _id === action.payload._id)
            ? [...state.wishlistItems]
            : [{ ...action.payload, quantity: 1 }, ...state.wishlistItems],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(
          (item) => item._id !== action.payload._id
        ),
      };

    case "MOVE_TO_WISHLIST":
      return {
        ...state,
        quantity: state.itemsInCart.length
          ? state.quantity - 1
          : state.quantity,
        totalPrice:
          state.itemsInCart.length &&
          state.itemsInCart
            .filter((item) => item._id === action.payload._id)
            .reduce(
              (previousValue, currentValue) =>
                state.totalPrice -
                previousValue -
                currentValue.price * currentValue.quantity,
              0
            ),
        totalDiscountedPrice:
          state.itemsInCart.length &&
          state.itemsInCart
            .filter((item) => item._id === action.payload._id)
            .reduce(
              (previousValue, currentValue) =>
                state.totalDiscountedPrice -
                previousValue -
                currentValue.originalPrice * currentValue.quantity,
              0
            ),
        itemsInCart: state.itemsInCart.filter(
          (item) => item._id !== action.payload._id
        ),
        wishlistItems:
          state.wishlistItems.length &&
          state.wishlistItems.some(({ _id }) => _id === action.payload._id)
            ? [...state.wishlistItems]
            : [{ ...action.payload, quantity: 1 }, ...state.wishlistItems],
      };
    default:
      return state;
  }
};
