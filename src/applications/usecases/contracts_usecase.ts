import { IPokeDexUsecase } from "@applications/interfaces/ipokeDex_usecase"
import { PokedexInput } from "@infrastructure/database/interfaces/PokeTeam"
import { IPokeDexRepository } from "@infrastructure/interfaces/ipoketeam_repository"
import { Request, Response } from "express"
import { ResponseCodes } from "shared/responses"

export default class PokeDexUseCase extends ResponseCodes implements IPokeDexUsecase {
  constructor(private readonly pokeDexRepository: IPokeDexRepository) {
    super()
  }

  public async getAllTeam(request: Request, response: Response): Promise<Response> {
    let result = null
    if (request.query) {
      const {playerName}=request.query
      if(playerName){
        result = await this.pokeDexRepository.getTeamByPlayerName(playerName as string)
      }else{
        return this.forbidden(response,"query error")
      }
      
    } else {
      result = await this.pokeDexRepository.getAllTeams()
    }

    if (result.isLeft()) return this.internal_server_error(response, result.value)
    else {
      if (result.value === null) return this.no_content(response)
      else return this.ok(response, result.value)
    }
  }

  public async getTeamById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const result = await this.pokeDexRepository.getTeamById(parseInt(id))
    if (result.isLeft()) return this.internal_server_error(response, result.value)
    else {
      if (result.value === null) return this.no_content(response)
      else return this.ok(response, result.value)
    }
  }

  public async createTeam(request: Request, response: Response): Promise<Response> {
    const body: PokedexInput = request.body
    const result = await this.pokeDexRepository.createTeam(body)

    if (result.isLeft()) return this.internal_server_error(response, result.value)
    else {
      if (result.value === null) return this.no_content(response)
      else return this.created(response, result.value)
    }
  }

  public async updateTeams(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const body: PokedexInput = request.body
    const result = await this.pokeDexRepository.updateTeamById(parseInt(id), body)
    if (result.isLeft()) return this.internal_server_error(response, result.value)
    else {
      if (result.value === null) return this.no_content(response)
      else return this.ok(response, result.value)
    }
  }

  public async deleteContracts(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const result = await this.pokeDexRepository.deleteTeamById(parseInt(id))
    if (result.isLeft()) return this.internal_server_error(response, result.value)
    else {
      if (result.value === false) return this.not_found(response)
      else return this.ok(response, result.value)
    }
  }
}
