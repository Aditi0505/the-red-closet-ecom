const Input = ({ inputType, label, placeholder }) => {
  return (
    <>
      <label
        htmlFor={inputType}
        className="required-content label-content ft-bolder"
      >
        {label}
      </label>
      <input
        type={inputType}
        required
        name={inputType}
        id={inputType}
        className="inputBox margin-tb-sm padding-xs input-width"
        placeholder={placeholder}
      />
    </>
  );
};

export { Input };
