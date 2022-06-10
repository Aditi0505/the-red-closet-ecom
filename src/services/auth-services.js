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
      toastDispatch({
        type: "SHOW",
        payload: "User Logged in!",
      });
      data.errors &&
        toastDispatch({
          type: "SHOW",
          payload: data.errors[0],
        });
    } else if (!email && !password) {
      toastDispatch({
        type: "SHOW",
        payload: "Please enter valid credentials.",
      });
    } else if (!password) {
      toastDispatch({
        type: "SHOW",
        payload: "Please enter valid password.",
      });
    } else if (!email) {
      toastDispatch({
        type: "SHOW",
        payload: "Please enter valid username.",
      });
    }
  } catch (error) {
    if (error.response.status === 401) {
      return toastDispatch({
        type: "SHOW",
        payload: "Invalid Credentials!",
      });
    } else if (error.response.status === 404) {
      return toastDispatch({
        type: "SHOW",
        payload: "User Not Found! Please signup first!",
      });
    } else {
      return toastDispatch({
        type: "SHOW",
        payload: "Cannot login right now!",
      });
    }
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
      data.errors &&
        toastDispatch({
          type: "SHOW",
          payload: data.errors[0],
        });
    } else {
      toastDispatch({
        type: "SHOW",
        payload: "Please enter correct details.",
      });
    }
  } catch (error) {
    if (error.response.status === 422) {
      return toastDispatch({
        type: "SHOW",
        payload: "User already Exist!",
      });
    }
    toastDispatch({
      type: "SHOW",
      payload: "Cannot signup right now.",
    });
  }
};
