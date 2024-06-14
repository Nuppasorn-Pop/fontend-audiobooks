import ApproveForm from "../features/create/components/ApproveForm";

export default function AdminPage() {
  return (
    <div className="bg-gray-100 overflow-y-scroll max-h-screen h-screen flex flex-col items-center">
      <table className="table bg-white mx-8 my-4 rounded-none w-1/2">
        <ApproveForm />
      </table>
    </div>
  );
}
