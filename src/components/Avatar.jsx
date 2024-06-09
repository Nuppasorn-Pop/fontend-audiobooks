export default function Avatar({ src, size = 2.5 }) {
  return (
    <img
      src={
        src ||
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
      }
      alt="user"
      style={{ width: `${size}rem`, height: `${size}rem` }}
      className="rounded-full"
    />
  );
}
