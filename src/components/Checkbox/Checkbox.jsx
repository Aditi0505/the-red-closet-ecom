import { useFilter } from "../../context";
const Checkbox = ({ categoryName, name, id, type, payload }) => {
  const { filterState, filterDispatch } = useFilter();
  console.log("filter", filterState[payload]);
  return (
    <>
      <input
        type="checkbox"
        required
        name={name}
        id={id}
        className="inputBox margin-tb-sm"
        onChange={() =>
          filterDispatch({
            type: type,
            payload: payload,
          })
        }
        checked={filterState[payload]}
      />
      <label htmlFor={name} className="label-content padding-xs">
        {categoryName}
      </label>
    </>
  );
};

export { Checkbox };
