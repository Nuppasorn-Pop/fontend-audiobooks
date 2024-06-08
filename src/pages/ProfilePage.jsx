import Button from "../components/Button";
import FormLoginRegister from "../components/FormLoginRegister";
import Input from "../components/Input";

export default function ProfilePage() {
  return (
    <div className="bg-gray-100 rounded-br-lg overflow-y-scroll max-h-screen h-screen">
      <div className="flex justify-center items-center">
        <FormLoginRegister>
          <div>
            <Input />
          </div>
          <div>
            <Input />
          </div>
          <div>
            <Input />
          </div>
          <div>
            <Button>Update Profile</Button>
          </div>
          <div>
            <Button>Reset</Button>
          </div>
        </FormLoginRegister>
      </div>
    </div>
  );
}
