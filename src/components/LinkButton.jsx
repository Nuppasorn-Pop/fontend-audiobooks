export default function LinkButton({ text, linkButton, onClick }) {
  return (
    <>
      <small className="text-black">{text}</small>
      <button onClick={onClick} className="btn btn-link text-xs p-0.5">
        {linkButton}
      </button>
    </>
  );
}
