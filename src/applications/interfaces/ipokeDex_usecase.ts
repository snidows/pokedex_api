import { Request, Response } from "express"
export interface IPokeDexUsecase {
  getAllTeam(_request: Request, response: Response): Promise<Response>
  getTeamById(request: Request, response: Response): Promise<Response>
  createTeam(request: Request, response: Response): Promise<Response>
  updateTeams(request: Request, response: Response): Promise<Response>
  deleteContracts(request: Request, response: Response): Promise<Response>
}
