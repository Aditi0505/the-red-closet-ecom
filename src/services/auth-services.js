import axios from "axios";

export const loginHandler = async (
  email,
  password,
  authDispatch,
  toast,
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
      toast.success("User Logged in!");
      data.errors && toast.error(data.errors[0]);
    } else if (!email && !password) {
      toast.error("Please enter valid credentials.");
    } else if (!password) {
      toast.error("Please enter valid password.");
    } else if (!email) {
      toast.error("Please enter valid username.");
    }
  } catch (error) {
    if (error.response.status === 401) {
      return toast.error("Invalid Credentials!");
    } else if (error.response.status === 404) {
      return toast.error("User Not Found! Please signup first!");
    } else {
      return toast.error("Cannot login right now!");
    }
  }
};

export const signupHandler = async (
  email,
  password,
  user,
  authDispatch,
  toast,
  navigate,
  location
) => {
  try {
    if (email !== "" && password !== "") {
      const data = await axios.post("/api/auth/signup", {
        email,
        password,
        user,
      });
      authDispatch({
        type: "SIGNUP",
        payload: { email: email, pasword: password, data },
      });
      navigate(location.state?.from?.pathname || "/login", {
        replace: true,
      });

      toast.success("Signup Successful!");
      data.errors && toast.error(data.errors[0]);
    } else {
      toast.error("Please enter correct details.");
    }
  } catch (error) {
    if (error.response.status === 422) {
      return toast.error("User already Exist!");
    } else {
      toast.error("Cannot signup right now.");
    }
  }
};
