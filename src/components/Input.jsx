/* eslint-disable react/prop-types */
export default function Input({
  placeholder,
  type,
  value,
  onChange,
  name,
  label,
  error,
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
        className={` w-full px-3 border rounded-sm mt-0.5 focus:outline-none focus:ring-1 focus:ring-orange-900  bg-white text-black ${
          error ? "border-red-500" : "border-blue-400"
        }`}
      />
      {error ? <small className="text-red-500">{error}</small> : null}
    </label>
  );
}
