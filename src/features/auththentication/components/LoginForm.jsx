import Button from "../../../components/Button";
import FormLoginRegister from "../../../components/FormLoginRegister";
import Input from "../../../components/Input";
import LinkButton from "../../../components/LinkButton";
import Logo from "../../../components/Logo";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const handleClickGoRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <FormLoginRegister onSubmit={onSubmit}>
      <div className="grid gap-4 min-full">
        <div className="flex justify-center">
          <Logo size={4.5} />
        </div>
        <div className="text-center">
          <small className="text-black">Welcome Back!</small> <br />
          <small>Sign in to continue to audiobooks</small>
        </div>
        <div>
          <Input label="EMAIL OR MOBILE" placeholder="Email or Mobile" />
        </div>
        <div>
          <Input label="PASSWORD" type="password" placeholder="Password" />
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
  );
}
