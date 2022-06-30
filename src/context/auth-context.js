import { createContext, useContext, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authReducer } from "../reducer/auth-reducer";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, {
    encodedToken: localStorage.getItem("token") || null,
    user: JSON.parse(localStorage.getItem("user")) || null,
  }); 
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("token", authState.encodedToken);
    localStorage.setItem("user", JSON.stringify(authState.user));
  }, [authState.encodedToken, authState.user]);

  const logoutHandler = () => {
    authDispatch({ type: "LOGOUT", payload: "" });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ authState, authDispatch, logoutHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
