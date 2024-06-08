import { useState } from "react";
import Button from "../../../components/Button";
import FormLoginRegister from "../../../components/FormLoginRegister";
import Input from "../../../components/Input";
import LinkButton from "../../../components/LinkButton";
import Logo from "../../../components/Logo";
import { useNavigate } from "react-router-dom";
import loginValidate from "../validator/validate-login";
import { AxiosError } from "axios";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";

const initialInput = {
  emailOrMobile: "",
  password: "",
};

const initialInputError = {
  emailOrMobile: "",
  password: "",
};

export default function LoginForm() {
  const { login, authUser, isAuthLoading } = useAuth();
  const [input, setInput] = useState(initialInput);
  const [textError, setTextError] = useState(initialInputError);

  const navigate = useNavigate();
  const handleClickGoRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  const onChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const isErrorInput = loginValidate(input);
      if (isErrorInput) {
        return setTextError(isErrorInput);
      }

      setTextError({ ...initialInputError });
      await login(input);
      navigate("/");
      toast.success("login successfull");
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response.status === 400) {
          setTextError((prev) => ({
            ...prev,
            emailOrMobile: "Email or mobile or password is invalid",
            password: "Email or mobile or password is invalid",
          }));
        }
      }
    }
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
          <Input
            label="EMAIL OR MOBILE"
            placeholder="Email or Mobile"
            name="emailOrMobile"
            value={input.emailOrMobile}
            onChange={onChangeInput}
            error={textError.emailOrMobile}
          />
        </div>
        <div>
          <Input
            label="PASSWORD"
            type="password"
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={onChangeInput}
            error={textError.password}
          />
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
