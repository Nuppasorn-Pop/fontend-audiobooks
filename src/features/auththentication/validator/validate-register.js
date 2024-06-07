import Joi from "joi";
const registerSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .trim()
    .messages({ "string.empty": "First name is require." }),
  lastName: Joi.string()
    .required()
    .trim()
    .messages({ "string.empty": "Last name is require." }),
  emailOrMobile: Joi.alternatives([
    Joi.string().email({ tlds: false }),
    Joi.string().pattern(/^[0-9]{10}$/),
  ]).messages({ "alternatives.match": "Invalid email or mobile." }),
  password: Joi.string()
    .required()
    .pattern(new RegExp("^[0-9a-zA-Z]{5,}$"))
    .messages({ "string.empty": "Password is require." })
    .message({
      "string.pattern.base": "password must be at least 5 characters.",
    }),
  confirmPassword: Joi.string()
    .required()
    .valid(Joi.ref("password"))
    .messages({ "any.only": "password and confirm password did not match." }),
});

const validateRegister = (inputRegister) => {
  const { error } = registerSchema.validate(inputRegister, {
    abortEarly: false,
  });
  if (error) {
    const errorMassage = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return errorMassage;
  }
};

export default validateRegister;
