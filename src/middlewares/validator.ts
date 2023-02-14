import { NextFunction, Request, Response } from "express"
import { Schema } from "joi"

export const ValidatorSchema = (schema: Schema) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { error } = schema.validate(req.body, {
      abortEarly: false,
    })
    if (error) {
      res.status(400).send("Invalid Request" + JSON.stringify(error))
    } else {
      next()
    }
  }
}
