import { createContext, useContext, useReducer } from "react";
import { orderReducer } from "../reducer";
const OrderContext = createContext(null);

const OrderProvider = ({ children }) => {
  const [orderState, orderDispatch] = useReducer(orderReducer, {
    addresses: [],
    currentAddress: "Aditi, Room no.411, 4th floor, Kasturba, Makkawala Road",
    orders: [],
    isOrdered: false,
  });
  return (
    <OrderContext.Provider value={{ orderState, orderDispatch }}>
      {children}
    </OrderContext.Provider>
  );
};

const useOrder = () => useContext(OrderContext);

export { useOrder, OrderProvider };
