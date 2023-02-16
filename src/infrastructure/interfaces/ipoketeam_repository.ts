import { PokedexInput, PokedexOutput } from "@infrastructure/database/interfaces/PokeTeam"
import { BaseError } from "@interfaces/base_error"
import { Either } from "@shared/either"

export interface IPokeDexRepository {
  getTeamById(id: number): Promise<Either<BaseError, PokedexOutput>>
  getAllTeamsByPlayerName(playerName:string): Promise<Either<BaseError, PokedexOutput[]>>
  getAllTeams(): Promise<Either<BaseError, PokedexOutput[]>>
  createTeam(userArea: PokedexInput): Promise<Either<BaseError, PokedexOutput>>
  updateTeamById(id: number, userArea: PokedexInput): Promise<Either<BaseError, PokedexOutput>>
  deleteTeamById(id: number): Promise<Either<BaseError, boolean>> 
}
