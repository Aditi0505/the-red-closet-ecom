export const getCheckedProducts = (filterState, productList) => {
  return [...productList].filter((item) =>
    filterState.Albums || filterState.Accessories || filterState.Wearables
      ? filterState[item.categoryName]
      : true
  );
};
