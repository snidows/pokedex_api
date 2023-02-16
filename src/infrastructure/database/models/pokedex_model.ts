import { DataTypes, Model } from "sequelize"

import { sequelize } from "../db"
import { PokedexAttributes, PokedexInput } from "../interfaces/PokeTeam"

class PokedexModel extends Model<PokedexAttributes, PokedexInput> implements PokedexAttributes {
  public id!: number
  public timeName!: string
  public playerName!: string
  public teamMembers!: string[]
  public readonly created_at!: Date
  public readonly updated_at!: Date
  public readonly deleted_at!: Date
}
PokedexModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    timeName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "time_name",
    },
    playerName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "player_name",
    },
    teamMembers: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      field: "team_members",
    },
  },
  { tableName: "pokedex_team", timestamps: true, sequelize, paranoid: true },
)

export { PokedexModel }
