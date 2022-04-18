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
    if (email !== "" && password !== "") {
      const data = await axios.post("/api/auth/login", { email, password });

      authDispatch({
        type: "LOGIN",
        payload: { email: email, pasword: password, data },
      });
      navigate(location.state?.from?.pathname || "/", {
        replace: true,
      });
    } else {
      toastDispatch({
        type: "SHOW",
        payload: "Please enter correct details.",
      });
    }
  } catch (e) {
    toastDispatch({
      type: "SHOW",
      payload: "Cannot login right now.",
    });
  }
};

export const signupHandler = async (
  email,
  password,
  authDispatch,
  toastDispatch,
  navigate,
  location
) => {
  try {
    if (email !== "" && password !== "") {
      const data = await axios.post("/api/auth/signup", { email, password });
      authDispatch({
        type: "SIGNUP",
        payload: { email: email, pasword: password, data },
      });
      navigate(location.state?.from?.pathname || "/login", {
        replace: true,
      });
      toastDispatch({
        type: "SHOW",
        payload: "Signup Successful!",
      });
    } else {
      toastDispatch({
        type: "SHOW",
        payload: "Please enter correct details.",
      });
    }
  } catch (e) {
    toastDispatch({
      type: "SHOW",
      payload: "Cannot signup right now.",
    });
  }
};
