import { PokedexOutput, PokedexInput } from "@infrastructure/database/interfaces/PokeTeam"
import { IPokeDexRepository } from "@infrastructure/interfaces/ipoketeam_repository"
import { Either } from "@shared/either"

// eslint-disable-next-line @typescript-eslint/naming-convention
export const pokedexRepositorySpy: IPokeDexRepository = {
  getTeamById: async (id: number): Promise<Either<String, PokedexOutput | null>> => jest.fn as any,
  getTeamByPlayerName: async (playerName: string): Promise<Either<String, PokedexOutput[] | null>> => jest.fn as any,
  getAllTeams: async (): Promise<Either<String, PokedexOutput[]>> => jest.fn as any,
  createTeam: async (userArea: PokedexInput): Promise<Either<String, PokedexOutput>> => jest.fn as any,
  updateTeamById: async (id: number, userArea: PokedexInput): Promise<Either<String, null | PokedexOutput>> =>
    jest.fn as any,
  deleteTeamById: async (id: number): Promise<Either<String, boolean>> => jest.fn as any,
}
