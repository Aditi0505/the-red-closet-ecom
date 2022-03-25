const VerticalCard = ({ title, image, msg, rating }) => {
  return (
    <div className="card">
      <div className="card-inner-container">
        <div className="card-image">
          <img src={image} alt={`${image}`} className="img" />
        </div>
        <div className="card-body">
          <div className="card-title">{title}</div>
          <div className="card-desc">{`$ ${msg}`}</div>
          <div className="card-desc">
            {[...Array(5)].map((item, i) =>
              i + 1 > rating ? (
                <i class="far fa-star"></i>
              ) : (
                <i class="fas fa-star enabled"></i>
              )
            )}
          </div>
        </div>
        <div className="hide-overlay">Women</div>
      </div>
      <div className="icons">
        <button className="btn-primary btn flex-center full-width padding-xs margin">
          Go to Cart
        </button>
        <button className="btn-action hide secondary">Move to Cart</button>
        <button className="btn-action-horizontal-hide secondary">
          Remove from wishlist
        </button>
        <span className="card-badge flex-center">
          <i className="far fa-heart"></i>
        </span>
      </div>
    </div>
  );
};
export { VerticalCard };
