export const toastReducer = (state, action) => {
  switch (action.type) {
    case "show":
      return { ...state, showToast: true, payload: action.payload };
    case "hide":
      return { ...state, showToast: false, payload: action.payload };
    default:
      return state;
  }
};
