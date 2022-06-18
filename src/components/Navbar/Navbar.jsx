import { Link, useLocation } from "react-router-dom";
import { NavLink } from "../Pills/Pills";
import { Button } from "../Button/Button";
import { useCart, useFilter, useAuth } from "../../context";
const NavBar = () => {
  const location = useLocation();
  const { filterState, filterDispatch } = useFilter();
  const { cartState } = useCart();
  const { authState } = useAuth();
  return (
    <div>
      <header className="desktop-navigation position-fixed">
        <nav className="logo-wrapper">
          <div className="nav-logo"></div>
          <div>
            <Link to="/" className="site-link">
              <p className="text-lg">The Red Closet</p>
            </Link>
          </div>
        </nav>
        {location.pathname === "/products" ? (
          <input
            type="text"
            name="search"
            id="search"
            placeholder="🔍 Search"
            onChange={(e) =>
              filterDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              })
            }
            value={filterState.searchKeyword}
          />
        ) : (
          ""
        )}
        {!authState.isLoggedIn && !authState.IsLoggedOut ? (
          <ul className="nav-icons">
            {location.pathname === "/" ? (
              <Button buttonState={"Login"} route="login" />
            ) : location.pathname === "/login" ? (
              <Button buttonState={"Signup"} route="signup" />
            ) : location.pathname === "/signup" ? (
              <Button buttonState={"Login"} route="login" />
            ) : (
              <Button buttonState={"Login"} route="login" />
            )}
            <NavLink
              linkTo="/wishlist"
              iconclassName={"fas fa-heart"}
              badgeCount="0"
            />
            <NavLink
              linkTo="/cart"
              iconclassName={"fas fa-shopping-cart"}
              badgeCount="0"
            />
          </ul>
        ) : (
          <ul className="nav-icons">
            <Button buttonState={"Logout"} route="" />
            <NavLink
              linkTo="/wishlist"
              iconclassName={"fas fa-heart"}
              badgeCount={cartState.wishlistItems.length}
            />
            <NavLink
              linkTo="/cart"
              iconclassName={"fas fa-shopping-cart"}
              badgeCount={cartState.itemsInCart.length}
            />
            {authState.isLoggedIn && (
              <li>
                <Link to="/user" className="nav-icon">
                  <div className="badge">
                    <i className={`badge-icon fas fa-user`}></i>
                  </div>
                </Link>
              </li>
            )}
          </ul>
        )}
      </header>
    </div>
  );
};

export { NavBar };
