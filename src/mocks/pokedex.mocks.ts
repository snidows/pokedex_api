import { PokedexOutput, PokedexInput } from "@infrastructure/database/interfaces/PokeTeam"
import { IPokeDexRepository } from "@infrastructure/interfaces/ipoketeam_repository"
import { BaseError } from "@interfaces/base_error"
import { Either } from "@shared/either"

// eslint-disable-next-line @typescript-eslint/naming-convention
export const pokedexRepositorySpy: IPokeDexRepository = {
  getTeamById: async (id: number): Promise<Either<BaseError, PokedexOutput>> => jest.fn as any,
  getAllTeamsByPlayerName: async (playerName: string): Promise<Either<BaseError, PokedexOutput[]>> => jest.fn as any,
  getAllTeams: async (): Promise<Either<BaseError, PokedexOutput[]>> => jest.fn as any,
  createTeam: async (userArea: PokedexInput): Promise<Either<BaseError, PokedexOutput>> => jest.fn as any,
  updateTeamById: async (id: number, userArea: PokedexInput): Promise<Either<BaseError, PokedexOutput>> =>
    jest.fn as any,
  deleteTeamById: async (id: number): Promise<Either<BaseError, boolean>> => jest.fn as any,
}

export const teamMockOutput:any= {
  id: 90,
  timeName: "batata",
  playerName: "lucas",
  teamMembers: [
    '{"avatarUrl":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png","id":11,"name":"metapod"}',
    '{"avatarUrl":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png","id":17,"name":"pidgeotto"}',
    '{"avatarUrl":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png","id":18,"name":"pidgeot"}',
    '{"avatarUrl":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png","id":10,"name":"caterpie"}',
  ],
  updated_at: "2023-02-16T11:10:16.218Z",
  created_at: "2023-02-16T11:10:16.218Z",
  deleted_at: null,
}

export const teamMockInput:any = {
  timeName: "batata",
  playerName: "lucas",
  teamMembers: [
    '{"avatarUrl":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png","id":11,"name":"metapod"}',
    '{"avatarUrl":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png","id":17,"name":"pidgeotto"}',
    '{"avatarUrl":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png","id":18,"name":"pidgeot"}',
    '{"avatarUrl":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png","id":10,"name":"caterpie"}',
  ]
}

