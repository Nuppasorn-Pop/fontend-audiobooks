export default function Logo({ size = 3 }) {
  return (
    <img
      src="src\images\logo.png"
      alt="logo"
      style={{ width: `${2 * size}rem` }}
    />
  );
}
