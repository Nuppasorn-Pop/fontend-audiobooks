import { useState } from "react";
import Button from "../../../components/Button";
import FormLoginRegister from "../../../components/FormLoginRegister";
import Input from "../../../components/Input";
import LinkButton from "../../../components/LinkButton";
import Logo from "../../../components/Logo";
import { useNavigate } from "react-router-dom";
import validateRegister from "../validator/validate-register";
import authApi from "../../../apis/auth-api";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

const initialInput = {
  firstName: "",
  lastName: "",
  emailOrMobile: "",
  password: "",
  confirmPassword: "",
};

const initialInputError = {
  firstName: "",
  lastName: "",
  emailOrMobile: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterForm() {
  const [input, setInput] = useState(initialInput);
  const [textError, setTextError] = useState(initialInputError);
  const navigate = useNavigate();
  const handleClickGoLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const onChangeInput = (e) => {
    setInput({ [e.target.name]: e.target.value, ...input });
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const isErrorInput = validateRegister(input);
      if (isErrorInput) {
        return setTextError(isErrorInput);
      }

      setTextError({ ...initialInputError });

      await authApi.register(input);
      setInput({ ...initialInput });
      toast.success("registered successfully. please log in to continue");
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response.data.field === "emailOrMobile") {
          setTextError((prev) => ({
            ...prev,
            emailOrMobile: "Email or Mobile already in use",
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
          <small className="text-black">Register</small> <br />
          <small>Welcome everyone to join with us</small>
        </div>
        <div>
          <Input
            label="FIRST NAME"
            name="firstName"
            placeholder="First Name"
            value={input.firstName}
            onChange={onChangeInput}
            error={textError.firstName}
          />
        </div>
        <div>
          <Input
            label="LAST NAME"
            name="lastName"
            placeholder="Last Name"
            value={input.lastName}
            onChange={onChangeInput}
            error={textError.lastName}
          />
        </div>
        <div>
          <Input
            label="EMAIL OR MOBILE"
            name="emailOrMobile"
            placeholder="Email or Mobile"
            value={input.emailOrMobile}
            onChange={onChangeInput}
            error={textError.emailOrMobile}
          />
        </div>
        <div>
          <Input
            label="PASSWORD"
            type="password"
            name="password"
            placeholder="Password"
            value={input.password}
            onChange={onChangeInput}
            error={textError.password}
          />
        </div>
        <div>
          <Input
            label="CONFIRM PASSWORD"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={input.confirmPassword}
            onChange={onChangeInput}
            error={textError.confirmPassword}
          />
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
  );
}
