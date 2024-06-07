import Button from "../components/Button";
import FormLoginRegister from "../components/FormLoginRegister";
import Input from "../components/Input";
import LinkButton from "../components/LinkButton";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();
  const handleClickGoLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <div className="flex justify-center items-center bg-gradient-to-tl from-red-500 to-orange-400 min-h-screen max-w-full">
      <FormLoginRegister>
        <div className="grid gap-4 min-full">
          <div className="flex justify-center">
            <Logo size={4.5} />
          </div>
          <div className="text-center">
            <small className="text-black">Register</small> <br />
            <small>Welcome everyone to join with us</small>
          </div>
          <div>
            <Input label="FIRST NAME" />
          </div>
          <div>
            <Input label="LAST NAME" />
          </div>
          <div>
            <Input label="EMAIL OR MOBILE" />
          </div>
          <div>
            <Input label="PASSWORD" />
          </div>
          <div>
            <Input label="CINFIRM PASSWORD" />
          </div>
          <div>
            <Button>REGISTER</Button>
          </div>
          <div>
            <LinkButton
              onClick={handleClickGoLogin}
              text="Already a User?"
              linkButton="Login now"
            />
          </div>
        </div>
      </FormLoginRegister>
    </div>
  );
}
