import { createContext, useContext, useReducer } from "react";
import { toastReducer } from "../reducer/toast-reducer";

const ToastContext = createContext(false);

const ToastProvider = ({ children }) => {
  const [state, dispatch] = useReducer(toastReducer, { showToast: false });
  return (
    <ToastContext.Provider value={{ state, dispatch }}>
      {children}
    </ToastContext.Provider>
  );
};
const useToast = () => useContext(ToastContext);

export { useToast, ToastProvider };
