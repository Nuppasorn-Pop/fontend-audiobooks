import logo from "../../src/images/logo.png";

export default function Logo({ size = 3 }) {
  return <img src={logo} alt="logo" style={{ width: `${2 * size}rem` }} />;
}
