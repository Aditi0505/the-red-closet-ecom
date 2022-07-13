import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input } from "../../../components";
import { setTitle } from "../../../utils/set-title";
import { useAuth } from "../../../context";
import { loginHandler } from "../../../services";
import { toast } from "react-toastify";
const Login = () => {
  const title = "The Red Closet | Login";
  setTitle(title);
  const { authDispatch } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordHandler = () => {
    setShowPassword((prev) => !prev);
  };
  const handleInput = (e, value) => {
    if (value === "password") {
      setPassword(e.target.value);
    }
    if (value === "email address") {
      setUserName(e.target.value);
    }
  };
  const guestLoginHandler = () => {
    const user = {
      email: "aditi@gmail.com",
      password: "aditi123",
    };
    setUserName(user.email);
    setPassword(user.password);
    loginHandler(
      user.email,
      user.password,
      authDispatch,
      toast,
      navigate,
      location
    );
  };
  return (
    <main className="outer-wrapper flex-spbt page-height">
      <section className="screen flex-spbt">
        <div className="form-container card-container-shadow">
          <div className="card-title">
            <h3>Login</h3>
          </div>
          <form className="card-desc form">
            <div className="text-left padding-xs">
              <Input
                inputType="email"
                label="Email Address"
                placeholder="redcloset@gmail.com"
                inputHandler={handleInput}
                value={userName}
              />
            </div>
            {showPassword ? (
              <div className="text-left padding-xs passwordBox">
                <Input
                  inputType="text"
                  label="Password"
                  placeholder="*****************"
                  inputHandler={handleInput}
                  value={password}
                />
                <i
                  className="fa fa-eye showLoginPassword"
                  onClick={showPasswordHandler}
                ></i>
              </div>
            ) : (
              <div className="text-left padding-xs passwordBox">
                <Input
                  inputType="password"
                  label="Password"
                  placeholder="*****************"
                  inputHandler={handleInput}
                  value={password}
                />
                <i
                  className="fa fa-eye showLoginPassword"
                  onClick={showPasswordHandler}
                ></i>
              </div>
            )}

            <button
              type="button"
              className="btn btn-primary margin-tb-sm auth-button"
              onClick={() => {
                loginHandler(
                  userName,
                  password,
                  authDispatch,
                  toast,
                  navigate,
                  location
                );
              }}
            >
              Login To Your Account
            </button>
            <button
              type="button"
              className="btn btn-outline-primary margin-tb-sm auth-button"
              onClick={guestLoginHandler}
            >
              Login- Guest Account
            </button>
            <div>
              <Link to="/signup" className="text text-sm ft-light underlined">
                Create New Account
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export { Login };
