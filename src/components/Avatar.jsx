export default function Avatar({ src, size = 2.5 }) {
  const image =
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";
  return (
    <img
      src={src || image}
      alt="user"
      style={{ width: `${size}rem`, height: `${size}rem` }}
      className="rounded-full"
    />
  );
}
