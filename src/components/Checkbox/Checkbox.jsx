const Checkbox = ({ categoryName, name, id }) => {
  return (
    <>
      <input
        type="checkbox"
        required
        name={name}
        id={id}
        className="inputBox margin-tb-sm"
      />
      <label htmlFor={name} className="label-content padding-xs">
        {categoryName}
      </label>
    </>
  );
};

export { Checkbox };
