import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer";

const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    sortBy: null,
    rating: 0,
    Albums: false,
    Wearables: false,
    Accessories: false,
    price: 7000,
  });
  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
