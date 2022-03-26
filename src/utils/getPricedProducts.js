export const getPricedProducts = (filterState, productList) => {
  return [...productList].filter((item) => item.price <= filterState.price);
};
