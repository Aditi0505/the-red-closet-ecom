const Tab = ({ name }) => {
  return (
    <div className="tab-container padding-sm">
      <button className={`tab btn btn-ghost-primary`}>
        <div>{name}</div>
      </button>
    </div>
  );
};

export { Tab };
