import { NavLink, Outlet } from "react-router-dom";
import { Tab } from "../../components";

const Profile = () => {
  return (
    <div className="outer-wrapper">
      <div className="flex-center profile full-height display-screen flex-column">
        <div className="flex-center">
          <NavLink
            end
            to="/user"
            className={({ isActive }) => (isActive ? "select" : "")}
          >
            <Tab name="Profile" />
          </NavLink>
          <NavLink
            end
            to="/user/addresses"
            className={({ isActive }) => (isActive ? "select" : "")}
          >
            <Tab name="Addresses" />
          </NavLink>
          <NavLink
            end
            to="/user/order-history"
            className={({ isActive }) => (isActive ? "select" : "")}
          >
            <Tab name="Order History" />
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
export { Profile };
