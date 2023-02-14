import { PokedexInput, PokedexOutput } from "@infrastructure/database/interfaces/PokeTeam"
import { Either } from "@sweet-monads/either"

export interface IPokeDexRepository {
  getTeamById(id: number): Promise<Either<String, PokedexOutput | null>>
  getAllTeams(): Promise<Either<String, PokedexOutput[]>>
  createTeam(userArea: PokedexInput): Promise<Either<String, PokedexOutput>>
  updateTeamById(id: number, userArea: PokedexInput): Promise<Either<String, null | PokedexOutput>>
  deleteTeamById(id: number): Promise<Either<String, boolean>>
}
