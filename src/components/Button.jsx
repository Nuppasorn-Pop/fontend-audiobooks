export default function Button({
  children,
  bg = "orange",
  size = "full",
  onClick,
  type,
}) {
  const bgList = {
    green: "bg-green-400",
    orange: "bg-orange-400",
    black: "bg-black",
  };

  const sizeList = {
    full: "w-full",
    "w-40": "w-40",
  };

  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-md ${sizeList[size]} ${bgList[bg]} text-white border-none text-xs`}
      type={type}
    >
      {children}
    </button>
  );
}
