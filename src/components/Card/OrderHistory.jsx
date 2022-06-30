import { Link } from "react-router-dom";
import { useOrder } from "../../context";
import { OrderCard } from "./OrderCard";

const OrderHistory = () => {
  const { orderState } = useOrder();
  return orderState.orders.length > 0 ? (
    orderState.orders.map((order) => (
      <div className="outer-wrapper" key={order.order_id}>
        <div
          className="card-container-horizontal padding-sm border-rd2"
          key={order.order_id}
        >
          <div className="card-inner-container-horizontal flex-column full-width">
            <div className="confirmed-order ft-bolder text-sm">
              Order Confirmed
            </div>
            <div className="ft-bolder text-sm">
              {`Order Id: ${order.order_id}`}
            </div>

            <div className="ft-bolder text-sm dark-shade">{`Payment Id: ${order.payment_id}`}</div>
            <div className="text-sm ft-bolder dark-shade">
              {`Total Amount Paid: ${`₹ ${order.totalPrice} `}`}
            </div>
            <div className="dark-shade">
              {`Delivery At: ${orderState.currentAddress}`}
            </div>
            {order.ordersList.length > 0 &&
              order.ordersList.map(
                (item) =>
                  item.quantity > 0 && (
                    <OrderCard product={item} key={item._id} />
                  )
              )}
          </div>
        </div>
      </div>
    ))
  ) : (
    <div className="outer-wrapper">
      <span className="text-md">
        No placed orders yet.
        <Link to="/products" className="page-heading text-md padding-sm">
          Place order
        </Link>
      </span>
    </div>
  );
};

export { OrderHistory };
