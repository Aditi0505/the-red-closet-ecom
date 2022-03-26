import { useFilter } from "../../context";
const Rating = ({ value, name, type, payload }) => {
  const { filterState, filterDispatch } = useFilter();
  return (
    <>
      <input
        type="radio"
        id={value}
        name={name}
        className="margin-tb-sm"
        onChange={() =>
          filterDispatch({
            type: type,
            payload: payload,
          })
        }
        checked={filterState.rating === payload}
      />
      <label htmlFor={value} className="label-content padding-xs">
        {value}
      </label>
    </>
  );
};

export { Rating };
