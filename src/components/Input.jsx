export default function Input({
  placeholder,
  type,
  value,
  onChange,
  name,
  label,
}) {
  return (
    <label className="flex flex-col form-control w-full max-w-xs">
      <span className="label-text text-xs text-black">{label}</span>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        className="w-full px-3 border rounded-sm mt-0.5 focus:outline-none focus:ring-1 focus:ring-orange-900 border-gray-300 bg-white"
      />
    </label>
  );
}
