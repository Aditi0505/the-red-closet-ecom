import { Link } from "react-router-dom";
import { Input } from "../../../components";
import { setTitle } from "../../../utils/set-title";
const Login = () => {
  const title = "The Red Closet | Login";
  setTitle(title);

  const handleInput = () => {};
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
              />
            </div>
            <div className="text-left padding-xs">
              <Input
                inputType="password"
                label="Password"
                placeholder="*****************"
              />
            </div>

            <div>
              <input
                type="checkbox"
                required
                name="checkbox"
                id="checkbox"
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
              className="btn btn-primary margin-tb-sm"
              onClick={handleInput}
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
