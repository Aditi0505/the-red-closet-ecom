import { Link } from "react-router-dom";
import { Input } from "../../../components";
import { setTitle } from "../../../utils/set-title";
const Signup = () => {
  const title = "The Red Closet | Signup";
  setTitle(title);
  return (
    <main className="outer-wrapper flex-spbt">
      <section className="screen flex-spbt">
        <div className="form-container card-container-shadow">
          <div className="card-title">
            <h3>Signup</h3>
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
                I accept all terms and conditions
              </label>
            </div>

            <button className="btn btn-primary margin-tb-sm">
              Create New Account
            </button>
            <div>
              <Link to="/signup" className="text text-sm ft-light">
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
