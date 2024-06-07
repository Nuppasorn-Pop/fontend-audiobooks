import Button from "../components/Button";
import FormLoginRegister from "../components/FormLoginRegister";
import Input from "../components/Input";
import LinkButton from "../components/LinkButton";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const handleClickGoRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  };
  return (
    <div className="flex justify-center items-center bg-gradient-to-tl from-red-500 to-orange-400 min-h-screen max-w-full">
      <FormLoginRegister>
        <div className="grid gap-4 min-full">
          <div className="flex justify-center">
            <Logo size={4.5} />
          </div>
          <div className="text-center">
            <small className="text-black">Welcome Back!</small> <br />
            <small>Sign in to continue to audiobooks</small>
          </div>
          <div>
            <Input label="EMAIL OR MOBILE" />
          </div>
          <div>
            <Input label="PASSWORD" />
          </div>
          <div>
            <Button>LOGIN</Button>
          </div>
          <div>
            <LinkButton
              onClick={handleClickGoRegister}
              text="New User?"
              linkButton="Register Here"
            />
          </div>
        </div>
      </FormLoginRegister>
    </div>
  );
}
