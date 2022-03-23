import { useToast } from "../../context/toast-context";
const Toast = () => {
  const { state, dispatch } = useToast();
  if (!state.showToast) return null;
  return (
    <div className="leading-container z-index toast-position">
      <div className="leading-toast flex-spbt">
        <div>Cannot fetch data right now. Please try after sometime.</div>
        <div className="btn-container flex-spbt">
          <button className="toast-btn toast">RETRY</button>
          <button
            className="toast toast-close"
            onClick={() => dispatch({ type: "hide" })}
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
export { Toast };
