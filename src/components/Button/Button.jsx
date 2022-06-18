import { Link } from "react-router-dom";
import { useAuth } from "../../context";
const Button = ({ buttonState, route }) => {
  const { logoutHandler } = useAuth();
  return buttonState !== "Logout" ? (
    <li>
      <Link to={`/${route}`} className="nav-icon">
        <button className="btn btn-ghost-primary">{buttonState}</button>
      </Link>
    </li>
  ) : (
    <li>
      <button
        className="btn btn-ghost-primary"
        onClick={() => {
          logoutHandler();
        }}
      >
        {buttonState}
      </button>
    </li>
  );
};

export { Button };
