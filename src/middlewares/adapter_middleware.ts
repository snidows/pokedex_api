import { Request, Response } from "express"

export const process_request = (funcToDo: any) => {
  return async (req: Request, res: Response): Promise<Response> => {
    try {
      const result = await funcToDo(req,res)
      return result
    } catch (err) {
      return res.status(500).json(err)
    }
  }
}
