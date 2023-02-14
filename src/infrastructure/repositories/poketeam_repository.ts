
import { PokedexInput, PokedexOutput } from "@infrastructure/database/interfaces/PokeTeam"
import { PokedexModel } from "@infrastructure/database/models/index"
import { IPokeDexRepository } from "@infrastructure/interfaces/ipoketeam_repository"
import { right, left, Either } from "@sweet-monads/either"
export default class PokeDexRepository implements IPokeDexRepository {
  constructor() {}

  public async getTeamById(id: number): Promise<Either<String, PokedexOutput | null>> {
    try {
      const result = await PokedexModel.findByPk(id)
      if (result === null || result === undefined) return right(null)
      return right(result)
    } catch (err) {
      return left(err as String)
    }
  }

  public async getTeamByPlayerName(playerName: string): Promise<Either<String, PokedexOutput[] | null>> {
    try {
      const result = await PokedexModel.findAll({
        where:{playerName}
      })
      if (result === null || result === undefined) return right(null)
      return right(result)
    } catch (err) {
      return left(err as String)
    }
  }

  public async getAllTeams(): Promise<Either<String, PokedexOutput[]>> {
    try {
      const result = await PokedexModel.findAll()
      return right(result)
    } catch (err) {
      return left(err as String)
    }
  }

  public async createTeam(userArea: PokedexInput): Promise<Either<String, PokedexOutput>> {
    try {
      const result = await PokedexModel.create(userArea)
      return right(result)
    } catch (err) {
      return left(err as String)
    }
  }

  public async updateTeamById(
    id: number,
    userArea: PokedexInput,
  ): Promise<Either<String, null | PokedexOutput>> {
    try {
      const result = await PokedexModel.update(userArea, {
        where: {
          id,
        },
        returning: true,
      })
      if (result[0] === 0) return right(null)
      return right(result[1][0])
    } catch (err) {
      return left(err as String)
    }
  }
  public async deleteTeamById(id: number): Promise<Either<String, boolean>> {
    try {
      const result = await PokedexModel.destroy({
        where: {
          id,
        },
      })
      if (result === 0) return right(false)
      else return right(true)
    } catch (err) {
      return left(err as String)
    }
  }
}
