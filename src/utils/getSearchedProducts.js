export const getSearchedProducts = (filterState, productList) => {
  return [...productList].filter((item) =>
    item.title.toLowerCase().includes(filterState.searchKeyword)
  );
};
