import Joi from "joi"

export const PokedexPostSchema = Joi.object({
  id: Joi.number().optional(),
  timeName: Joi.string().required(),
  playerName: Joi.string().required(),
  teamMembers: Joi.array()
    .items(
      Joi.object({
        name: Joi.string().required(),
        id: Joi.number().required(),
        avatarUrl: Joi.string().required(),
      }),
    )
    .required(),
}).unknown(false)
