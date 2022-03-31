import { Link } from "react-router-dom";
const PrimaryButton = ({ buttonState }) => {
  return (
    <li>
      <Link to="/login" className="nav-icon">
        <button className="btn btn-primary margin-tb-sm">{buttonState}</button>
      </Link>
    </li>
  );
};

export { PrimaryButton };
