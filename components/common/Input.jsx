const Input = ({
  label,
  placeholder,
  value,
  handleChange,
  name,
  type,
  disabled,
  inputProps,
  id,
  keyPress,
}) => (
  <div className="w-full">
    <label
      className="my-2.5 font-semibold leading-relaxed block text-sm"
      style={{ color: "#201e27" }}
    >
      {label}
    </label>
    <input
      id={id}
      placeholder={placeholder}
      name={name}
      type={type}
      onKeyPress={keyPress}
      disabled={disabled}
      value={value}
      {...inputProps}
      onChange={handleChange}
      style={{ lineHeight: 1.15 }}
      className="rounded-md mb-2.5 border w-full text-sm p-2.5 transition-all border-gray-300 duration-300 ease-in focus:ring-0 focus:border-2 outline-none focus:border-[#1F86FF]"
    />
  </div>
);
Input.defaultProps = {
  handleChange: () => {},
  type: "text",
  inputProps: {},
  keyPress: () => {},
};
export default Input;
