import { Link } from "react-router-dom";
const Banner = ({ image, banner }) => {
  return (
    <div className="small-banner">
      <div className="card">
        <div className="card-inner-container">
          <div className="card-image-overlay opacity">
            <Link to="/products">
              <img src={image} alt="Taylor Swift" className="img" />
            </Link>
          </div>
          <div className="hide card-body-overlay opacity">
            <div className="card-title">Orange Hat</div>
            <div className="card-desc">$2000</div>
          </div>
          <div className="overlay flex-center">{banner}</div>
        </div>
        <div className="hide icons-overlay opacity">
          <button className="btn-action flex-center">Add to Cart</button>
          <button className="btn-action-horizontal secondary">
            Remove from wishlist
          </button>
          <span className="dismiss flex-center">
            <button className="card-btn-close">
              <i className="fas fa-times-circle"></i>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};
export { Banner };
