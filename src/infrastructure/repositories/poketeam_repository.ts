import { PokedexInput, PokedexOutput } from "@infrastructure/database/interfaces/PokeTeam"
import { PokedexModel } from "@infrastructure/database/models/index"
import { IPokeDexRepository } from "@infrastructure/interfaces/ipoketeam_repository"
import { BaseError } from "@interfaces/base_error"
import { Either, right, left } from "@shared/either"
export default class PokeDexRepository implements IPokeDexRepository {
  constructor() {}

  public async getTeamById(id: number): Promise<Either<BaseError, PokedexOutput>> {
    try {
      const result = await PokedexModel.findByPk(id)
      if (result) return right(result)
      else return left({ message: "Not encountred Team ID" } as BaseError)
    } catch (err) {
      return left(err as BaseError)
    }
  }

  public async getAllTeams(): Promise<Either<BaseError, PokedexOutput[]>> {
    try {
      const result = await PokedexModel.findAll()
      return right(result)
    } catch (err) {
      return left(err as BaseError)
    }
  }

  public async getAllTeamsByPlayerName(playerName: string): Promise<Either<BaseError, PokedexOutput[]>> {
    try {
      const result = await PokedexModel.findAll({ where: { playerName } })
      return right(result)
    } catch (err) {
      return left(err as BaseError)
    }
  }

  public async createTeam(userArea: PokedexInput): Promise<Either<BaseError, PokedexOutput>> {
    try {
      const result = await PokedexModel.create(userArea)
      return right(result)
    } catch (err) {
      return left(err as BaseError)
    }
  }

  public async updateTeamById(id: number, userArea: PokedexInput): Promise<Either<BaseError, PokedexOutput>> {
    try {
      const result = await PokedexModel.update(userArea, {
        where: {
          id,
        },
        returning: true,
      })
      return right(result[1][0])
    } catch (err) {
      return left(err as BaseError)
    }
  }
  public async deleteTeamById(id: number): Promise<Either<BaseError, boolean>> {
    try {
      const result = await PokedexModel.destroy({
        where: {
          id,
        },
      })
      if (result === 0) return right(false)
      else return right(true)
    } catch (err) {
      return left(err as BaseError)
    }
  }
}
