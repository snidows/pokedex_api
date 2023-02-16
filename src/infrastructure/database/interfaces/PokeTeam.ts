import { Optional } from "sequelize"

export interface PokedexAttributes {
  id: number
  timeName: string
  playerName: string
  teamMembers: string[]
  created_at?: Date
  updated_at?: Date
  deleted_at?: Date | null
}

export interface PokedexInput extends Optional<PokedexAttributes, "id"> {}
export interface PokedexOutput extends Required<PokedexAttributes> {}

export interface PokemonTeam {
  avatarUrl: string
  id: number
  name: string
}
