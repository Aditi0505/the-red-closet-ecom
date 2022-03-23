const RadioButton = ({ value, name }) => {
  return (
    <>
      <input type="radio" id={value} name={name} className="margin-tb-sm" />
      <label htmlFor={value} className="label-content padding-xs">
        {value}
      </label>
    </>
  );
};

export { RadioButton };
