/* eslint-disable react/prop-types */
export default function FormLoginRegister({ children, onSubmit }) {
  return (
    <div className=" bg-white w-72 shadow-xl rounded-lg p-4">
      <form onSubmit={onSubmit}>{children}</form>
    </div>
  );
}
