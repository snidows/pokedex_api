import { IPokeDexUsecase } from "@applications/interfaces/ipokeDex_usecase"
import { ControllerBase } from "@shared/controller_base"
import { Request, Response } from "express"

export default class PokedexController extends ControllerBase {
  constructor(private readonly pokedexUseCase: IPokeDexUsecase) {
    super()
  }
  public async post(request: Request, response: Response): Promise<Response> {
    const result = await this.pokedexUseCase.createTeam(request.body)
    if (result.isRight()) return this.ok(response, result.value)
    else return this.internal_server_error(response, result.value)
  }

  public async getAll(request: Request, response: Response): Promise<Response> {
    const { playerName } = request.query
    const result = await this.pokedexUseCase.getAllTeam(playerName)

    if (result.isRight()) return this.ok(response, result.value)
    else return this.internal_server_error(response, result.value)
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    console.log(id)
    const result = await this.pokedexUseCase.deleteTeamById(parseInt(id))

    if (result.isRight()) {
      if (result.value) return this.created(response, {message:`deleted team with id = ${id}`})
      return this.forbidden(response, {error:`dont have team with id = ${id}`})
    } else return this.internal_server_error(response, result.value)
  }
}
