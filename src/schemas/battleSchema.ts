import joi from "joi";

const categorySchema = joi.object({
  firstUser: joi.string().required(),
  secondUser: joi.string().required(),
});

export default categorySchema;
