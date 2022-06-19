const OrderCard = ({ product }) => {
  return (
    <div className="card-container-horizontal full-width">
      <div className="card-inner-container-horizontal">
        <div className="horizontal-card-image">
          <img
            src={product.image}
            alt={product.image}
            className="img-horizontal order-img"
          />
        </div>
        <div className="flex-center card-body-horizontal">
          <div className="card-title-horizontal">{product.title}</div>
          <div className="card-desc-horizontal">{`₹ ${product.price} `}</div>
          <div className="flex-center text-sm dark-shade">
            Quantity:
            <span>{product.quantity}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { OrderCard };
