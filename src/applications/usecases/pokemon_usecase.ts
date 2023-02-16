import { IPokeDexUsecase } from "@applications/interfaces/ipokeDex_usecase"
import { PokedexInput, PokedexOutput } from "@infrastructure/database/interfaces/PokeTeam"
import { IPokeDexRepository } from "@infrastructure/interfaces/ipoketeam_repository"
import { Either, left, right } from "@shared/either"
import { BaseError } from "@interfaces/base_error"
import { InternalError } from "@applications/errors/internal_error"

export default class PokeDexUseCase implements IPokeDexUsecase {
  constructor(private readonly pokeDexRepository: IPokeDexRepository) {}

  public async getAllTeam(query: any): Promise<Either<BaseError, PokedexOutput[]>> {
    if (query) {
      const result = await this.pokeDexRepository.getAllTeamsByPlayerName(query)
      if (result.isRight()) return right(result.value)
      else return left(result.value)
    } else {
      const result = await this.pokeDexRepository.getAllTeams()
      if (result.isRight()) {
        return right(result.value)
      }
      return left(result.value)
    }
  }

  public async getTeamById(id: number): Promise<Either<BaseError, PokedexOutput>> {
    const result = await this.pokeDexRepository.getTeamById(id)
    if (result.isRight()) return right(result.value)
    else return left(result.value)
  }

  public async createTeam(team: PokedexInput): Promise<Either<BaseError, PokedexOutput>> {
    const result = await this.pokeDexRepository.createTeam(team)
    if (result.isLeft()) return left(new InternalError('Internal Server Error'))
    else return right(result.value)
  }

  public async deleteTeamById(id: number): Promise<Either<BaseError, boolean>> {
    const result = await this.pokeDexRepository.deleteTeamById(id)

    if (result.isLeft()) return left(result.value)
    //aqui eu fiquei em duvida, se eu pre processo no use case caso existir ou nao, ou no controller....
    return right(result.value)
  }
}
