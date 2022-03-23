import { Link, useLocation } from "react-router-dom";
import { NavLink } from "../Pills/Pills";
import { Button } from "../Button/Button";
const NavBar = () => {
  const location = useLocation();
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
        <input type="text" name="search" id="search" placeholder="🔍 Search" />
        <ul className="nav-icons">
          {location.pathname === "/" ? (
            <Button buttonState={"Login"} />
          ) : location.pathname === "/login" ? (
            <Button buttonState={"Signup"} />
          ) : (
            <Button buttonState={"Logout"} />
          )}
          <NavLink
            linkTo="/wishlist"
            iconclassName={"fas fa-heart"}
            badgeCount={0}
          />
          <NavLink
            linkTo="/cart"
            iconclassName={"fas fa-shopping-cart"}
            badgeCount={0}
          />
        </ul>
      </header>
    </div>
  );
};

export { NavBar };
