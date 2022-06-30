import { useState } from "react";
import { MobileLayoutFilter } from "../MobileLayout/MobileLayoutFilter";
import { MobileLayoutSort } from "../MobileLayout/MobileLayoutSort";

const FilterButton = ({ value }) => {
  const [sort, setSort] = useState(false);
  const [filter, setFilter] = useState(false);
  const setFilterAction = (value) => {
    if (value === "Sort") {
      setSort((prev) => !prev);
    } else if (value === "Filter") {
      setFilter((prev) => !prev);
    }
  };
  return (
    <div className="full-width passwordBox">
      <button
        className="btn-action-horizontal full-width secondary"
        onClick={() => setFilterAction(value)}
      >
        {value}
      </button>
      {sort ? (
        <MobileLayoutSort inputHandler={setFilterAction} />
      ) : filter ? (
        <MobileLayoutFilter inputHandler={setFilterAction} />
      ) : (
        ""
      )}
    </div>
  );
};
export { FilterButton };
