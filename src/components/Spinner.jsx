export default function Spinner({ transparent }) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-white z-40 ${
          transparent ? "opacity-70" : ""
        }`}
      ></div>
      <div className="fixed inset-0 z-50  flex justify-center items-center animate-spin">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          height="2rem"
          width="2rem"
          fill="#000"
        >
          <g>
            <path d="M10,1V3a7,7,0,1,1-7,7H1a9,9,0,1,0,9-9Z" />
          </g>
        </svg>
      </div>
    </>
  );
}
