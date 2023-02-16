import { PokedexInput, PokedexOutput } from "@infrastructure/database/interfaces/PokeTeam"
import { BaseError } from "@interfaces/base_error"
import { Either } from "@shared/either"
export interface IPokeDexUsecase {
  getAllTeam(query: any):Promise<Either<BaseError, PokedexOutput[]>>
  getTeamById(id:number): Promise<Either<BaseError, PokedexOutput>>
  createTeam(team: PokedexInput):Promise<Either<BaseError, PokedexOutput>>
  deleteTeamById(id: number): Promise<Either<BaseError, boolean>>
}
