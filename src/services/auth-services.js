import axios from "axios";

export const loginHandler = async (
  email,
  password,
  authDispatch,
  toastDispatch,
  navigate,
  location
) => {
  try {
    const data = await axios.post("/api/auth/login", { email, password });
    authDispatch({
      type: "LOGIN",
      payload: { email: email, pasword: password, data },
    });
    navigate(location.state?.from?.pathname || "/", {
      replace: true,
    });
  } catch (e) {
    toastDispatch({
      type: "SHOW",
      payload: "Cannot login right now.",
    });
  }
};
