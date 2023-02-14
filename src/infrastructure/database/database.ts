import { IDatabase } from "interfaces/IDatabase"
import { Sequelize } from "sequelize"
import { sequelize } from "./db"

export class DataBase implements IDatabase {
  private _sequelizeConnection: Sequelize
  constructor() {}
  public sequelizeConn(): Sequelize {
    return this._sequelizeConnection
  }
  public async dbInit() {
    // sequelize.sync()
    return this._sequelizeConnection
  }
}
