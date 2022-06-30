import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input } from "../../../components";
import { setTitle } from "../../../utils/set-title";
import { useAuth } from "../../../context";
import { loginHandler, signupHandler } from "../../../services";
import { validateFields } from "../../../utils/validateFields";
import { toast } from "react-toastify";
const Signup = () => {
  const title = "The Red Closet | Signup";
  setTitle(title);
  const [user, setUser] = useState({ email: "", firstName: "", lastName: "" });
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { authDispatch } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const showPasswordHandler = () => {
    setShowPassword((prev) => !prev);
  };
  const showSetConfirmPasswordHandler = () => {
    setShowConfirmPassword((prev) => !prev);
  };
  const handleInput = (e, value) => {
    if (value === "password") {
      setPassword(e.target.value);
    }
    if (value === "first name") {
      setUser((user) => ({
        ...user,
        firstName: e.target.value,
      }));
    }
    if (value === "last name") {
      setUser((user) => ({
        ...user,
        lastName: e.target.value,
      }));
    }
    if (value === "email address") {
      setUser((user) => ({
        ...user,
        email: e.target.value,
      }));
    }
    if (value === "confirm password") {
      setConfirmPassword(e.target.value);
    }
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };
  const validateHandler = () => {
    if (
      !user.email &&
      !user.firstName &&
      !user.lastName &&
      !password &&
      !confirmPassword
    ) {
      toast.info("Please enter valid credentials");
    } else if (!user.firstName) {
      toast.info("Please enter first name");
    } else if (!user.lastName) {
      toast.info("Please enter last name");
    } else if (!user.email || !user.email.includes("@")) {
      toast.info("Please enter valid username");
    } else if (!confirmPassword && !password) {
      toast.info("Please enter valid password");
    } else if (!confirmPassword && password) {
      toast.info("Please confirm password");
    } else {
      const isValid = validateFields(password, confirmPassword);
      if (isValid) {
        signupHandler(
          user.email,
          password,
          user,
          authDispatch,
          toast,
          navigate,
          location
        );
      } else {
        toast.error("Password does not match!");
      }
    }
  };
  const guestSignUpHandler = () => {
    const userDetails = {
      firstName: "Sarah",
      lastName: "Parker",
      email: "sarah.parker@gmail.com",
      password: "sarah@parker",
      confirmPassword: "sarah@parker",
    };
    setUser((user) => ({
      ...user,
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      email: userDetails.email,
    }));
    setPassword(userDetails.password);
    setConfirmPassword(userDetails.confirmPassword);
    const isValid = validateFields(
      userDetails.password,
      userDetails.confirmPassword
    );
    if (isValid) {
      const data = signupHandler(
        userDetails.email,
        userDetails.password,
        userDetails,
        authDispatch,
        toast,
        navigate,
        location
      );
      data.then(
        (res) =>
          !res &&
          loginHandler(
            userDetails.email,
            userDetails.password,
            authDispatch,
            toast,
            navigate,
            location
          )
      );
    } else {
      toast.error("Password does not match!");
    }
  };
  return (
    <main className="outer-wrapper flex-spbt page-height">
      <section className="screen flex-spbt sign-up">
        <div className="form-container card-container-shadow">
          <div className="card-title">
            <h3>Signup</h3>
          </div>
          <form className="card-desc form" onSubmit={formSubmitHandler}>
            <div className="text-left padding-xs">
              <Input
                inputType="text"
                label="First Name"
                placeholder="Aditi"
                inputHandler={handleInput}
                value={user.firstName}
              />
              <Input
                inputType="text"
                label="Last Name"
                placeholder="Jha"
                inputHandler={handleInput}
                value={user.lastName}
              />
              <Input
                inputType="email"
                label="Email Address"
                placeholder="redcloset@gmail.com"
                inputHandler={handleInput}
                value={user.email}
              />
              {showPassword ? (
                <div className="text-left passwordBox">
                  <Input
                    inputType="text"
                    label="Password"
                    placeholder="*****************"
                    inputHandler={handleInput}
                    value={password}
                  />
                  <i
                    className="fa fa-eye showPassword"
                    onClick={showPasswordHandler}
                  ></i>
                </div>
              ) : (
                <div className="text-left passwordBox">
                  <Input
                    inputType="password"
                    label="Password"
                    placeholder="*****************"
                    inputHandler={handleInput}
                    value={password}
                  />
                  <i
                    className="fa fa-eye showPassword"
                    onClick={showPasswordHandler}
                  ></i>
                </div>
              )}

              {showConfirmPassword ? (
                <div className="text-left passwordBox">
                  <Input
                    inputType="text"
                    label="Confirm Password"
                    placeholder="*****************"
                    inputHandler={handleInput}
                    value={confirmPassword}
                  />
                  <i
                    className="fa fa-eye showPassword"
                    onClick={showSetConfirmPasswordHandler}
                  ></i>
                </div>
              ) : (
                <div className="text-left passwordBox">
                  <Input
                    inputType="password"
                    label="Confirm Password"
                    placeholder="*****************"
                    inputHandler={handleInput}
                    value={confirmPassword}
                  />
                  <i
                    className="fa fa-eye showPassword"
                    onClick={showSetConfirmPasswordHandler}
                  ></i>
                </div>
              )}
            </div>
            <button
              className="btn btn-primary margin-tb-sm auth-button"
              onClick={validateHandler}
            >
              Create New Account
            </button>
            <button
              className="btn btn-outline-primary margin-tb-sm auth-button"
              onClick={guestSignUpHandler}
            >
              Fill Test Credentials
            </button>
            <div>
              <Link to="/login" className="text text-sm ft-light underlined">
                Already have an account
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export { Signup };
