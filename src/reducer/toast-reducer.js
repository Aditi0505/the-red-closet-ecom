export const toastReducer = (state, action) => {
  switch (action.type) {
    case "SHOW":
      return { ...state, showToast: true, payload: action.payload };
    case "HIDE":
      return { ...state, showToast: false, payload: action.payload };
    default:
      return state;
  }
};
