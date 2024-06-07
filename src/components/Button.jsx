export default function Button({ children }) {
  return (
    <button className="px-3 py-1.5 rounded-md w-full bg-orange-400 text-white border-none text-xs">
      {children}
    </button>
  );
}
