import Avatar from "../components/Avatar";
import FormLoginRegister from "../components/FormLoginRegister";
import Input from "../components/Input";
import useAuth from "../hooks/useAuth";

export default function ProfilePage() {
  const { authUser } = useAuth();
  return (
    <div className="bg-gray-100 rounded-br-lg overflow-y-scroll max-h-screen h-screen">
      <div className="flex justify-center items-center p-4">
        <FormLoginRegister>
          <div className=" text-orange-600 font-semibold underline decoration-1 underline-offset-8 pb-3">
            Account Setting
          </div>
          <div className="flex flex-col items-center text-xs gap-1">
            <div>
              {`${authUser?.firstName}`} {`${authUser?.lastName}`}
            </div>
            <div>
              <Avatar src={authUser?.profileImage} size={4} />
            </div>
          </div>

          <div className="grid gap-4 min-full px-2 mt-1">
            <div>
              <Input label="First name" value={`${authUser?.firstName}`} />
            </div>
            <div>
              <Input label="Last name" value={`${authUser?.lastName}`} />
            </div>
            <div>
              <Input
                label="EmailorMobile"
                value={
                  authUser?.email ? `${authUser?.email}` : `${authUser?.mobile}`
                }
              />
            </div>
          </div>
        </FormLoginRegister>
      </div>
    </div>
  );
}
