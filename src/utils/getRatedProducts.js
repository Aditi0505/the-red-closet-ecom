export const getRatedProducts = (filterState, productList) => {
  return [...productList].filter((item) => item.rating >= filterState.rating);
};
