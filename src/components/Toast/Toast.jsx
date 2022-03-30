import { useToast } from "../../context/toast-context";
const Toast = () => {
  const { toastState, toastDispatch } = useToast();
  if (!toastState.showToast) return null;
  return (
    <div className="leading-container z-index toast-position">
      <div className="leading-toast flex-spbt">
        <div>{toastState.payload}</div>
        <div className="btn-container flex-spbt">
          <button className="toast-btn toast">RETRY</button>
          <button
            className="toast toast-close"
            onClick={() => toastDispatch({ type: "HIDE", payload: "" })}
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
export { Toast };
