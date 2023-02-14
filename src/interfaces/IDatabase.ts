import { Sequelize } from "sequelize"

export interface IDatabase {
  sequelizeConn: () => Sequelize
  dbInit: () => void
}
