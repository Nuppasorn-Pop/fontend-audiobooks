/* eslint-disable react/prop-types */
export default function FormLoginRegister({ children }) {
  return (
    <div className=" bg-white w-72 shadow-xl rounded-lg p-4">
      <form>{children}</form>
    </div>
  );
}
