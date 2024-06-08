import Joi from "joi";
const loginSchema = Joi.object({
  emailOrMobile: Joi.string()
    .required()
    .messages({ "string.empty": "Email or Mobile is require." }),
  password: Joi.string()
    .required()
    .messages({ "string.empty": "Password is require." }),
});

const loginValidate = (inputLogin) => {
  const { error } = loginSchema.validate(inputLogin, { abortEarly: false });
  if (error) {
    const errorMessage = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return errorMessage;
  }
};

export default loginValidate;
