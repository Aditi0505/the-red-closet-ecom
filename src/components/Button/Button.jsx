import { Link } from "react-router-dom";
const Button = ({ buttonState }) => {
  return (
    <li>
      <Link to="/login" className="nav-icon">
        <button className="btn btn-ghost-primary">{buttonState}</button>
      </Link>
    </li>
  );
};

export { Button };
