import { Link } from "react-router-dom";

const NavLink = ({ linkTo, iconclassName, badgeCount }) => {
  return (
    <li>
      <Link to={`${linkTo}`} className="nav-icon">
        <div className="badge">
          <i className={`badge-icon ${iconclassName}`}></i>
          <span className="display-flex badge-number badge-display">
            {badgeCount}
          </span>
        </div>
      </Link>
    </li>
  );
};

const FooterLink = ({ link, iconclassName }) => {
  return (
    <li>
      <a href={link} className="nav-icon" target="_blank" rel="noreferrer">
        <i className={`fab ${iconclassName} text-sm`}></i>
      </a>
    </li>
  );
};
export { NavLink, FooterLink };
