const Input = ({ type, value, onChange, placeholder }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="py-2 px-3 rounded-tl-[8px] rounded-bl-[8px] text-lg font-medium border-none bg-gray-100 w-full max-w-xs"
    />
  );
};

export default Input;
