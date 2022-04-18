import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input } from "../../../components";
import { setTitle } from "../../../utils/set-title";
import { useToast, useAuth } from "../../../context";
import { loginHandler } from "../../../services";
const Login = () => {
  const title = "The Red Closet | Login";
  setTitle(title);
  const { authDispatch } = useAuth();
  const { toastDispatch } = useToast();
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

  return (
    <main className="outer-wrapper flex-spbt">
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
                  className="fa fa-eye showPassword"
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
                  className="fa fa-eye showPassword"
                  onClick={showPasswordHandler}
                ></i>
              </div>
            )}

            <div>
              <input
                type="checkbox"
                required
                name="remember"
                id="remember"
                className="inputBox margin-tb-sm"
              />
              <label
                htmlFor="remember"
                className="label-content text-sm padding-xs"
              >
                Remember me
              </label>
              <Link
                to="/"
                className="text text-right text-sm ft-light padding-xs"
              >
                Forgot password
              </Link>
            </div>

            <button
              type="button"
              className="btn btn-primary margin-tb-sm"
              onClick={() => {
                loginHandler(
                  userName,
                  password,
                  authDispatch,
                  toastDispatch,
                  navigate,
                  location
                );
              }}
            >
              Login To Your Account
            </button>
            <div>
              <Link to="/signup" className="text text-sm ft-light">
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
