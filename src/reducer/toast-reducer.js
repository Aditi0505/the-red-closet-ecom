export const toastReducer = (state, action) => {
  switch (action.type) {
    case "show":
      return { ...state, showToast: true };
    case "hide":
      return { ...state, showToast: false };
    default:
      return state;
  }
};
