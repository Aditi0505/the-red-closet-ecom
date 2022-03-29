import { Link } from "react-router-dom";
const HorizontalCard = ({ title, image, msg, category }) => {
  return (
    <div className="card-container-horizontal">
      <div className="card-inner-container-horizontal">
        <div className="card-image-horizontal">
          <img src={image} alt="Taylor Swift" className="img-horizontal" />
        </div>
        <div className="flex-center card-body-horizontal">
          <div className="card-title-horizontal">{title}</div>
          <div className="card-desc-horizontal">{msg}</div>
          <Link to="/products" state={category}>
            <i className="fa fa-arrow-right btn btn-icon"></i>
          </Link>
        </div>
        <div className="hide-overlay">Women</div>
      </div>
      <div className="hide">
        <button className="btn-action-horizontal">Add to Cart</button>
        <button className="btn-action-horizontal secondary">
          Remove from wishlist
        </button>
        <span className="badge-horizontal">
          <i className="far fa-heart"></i>
        </span>
      </div>
    </div>
  );
};
export { HorizontalCard };
