// Returning Corresponding Label and Input Elements

const MyTextInput = ({ label, ...props }) => {
  return (
    <div className="row-wrapper">
      <label className="label" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input className="text-input" {...props} />
    </div>
  );
};

export default MyTextInput;
