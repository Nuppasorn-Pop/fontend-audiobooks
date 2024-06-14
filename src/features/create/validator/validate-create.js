import Joi from "joi";

const createAudiobookSchema = Joi.object({
  title: Joi.string().required().max(100).messages({
    "string.empty": "Title is require.",
    "string.max": "Title length must be less than or equal to 100 characters",
  }),
  author: Joi.string()
    .required()
    .messages({ "string.empty": "Author is require." }),
  bookImage: Joi.string().trim().allow(null, ""),
  voiceActor: Joi.string().trim().allow(null, ""),
  bookType: Joi.string().trim().allow(null, ""),
  detail: Joi.string().trim().allow(null, ""),
});

const createValidator = (inputCreate) => {
  const { error } = createAudiobookSchema.validate(inputCreate, {
    abortEarly: false,
  });
  if (error) {
    const errorMessage = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return errorMessage;
  }
};

export default createValidator;
