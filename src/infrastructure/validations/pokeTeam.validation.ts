import Joi from "joi"

export const PokedexPostSchema = Joi.object({
  id:Joi.number().optional(),
  timeName: Joi.string().required(),
  playerName: Joi.string().required(),
  teamMembers: Joi.array().items(Joi.string()).required(),
}).unknown(false)
