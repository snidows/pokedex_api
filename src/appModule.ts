import { Environment } from "@infrastructure/environments"
import { IEnvironments } from "./interfaces/IEnvironments"
import { IDatabase } from "interfaces/IDatabase"
import { DataBase } from "@infrastructure/database/database"
import { server_hosting } from "./server"
export class AppModule {
  private environment: IEnvironments
  private data_base: IDatabase
  constructor() {
    this.environment = new Environment()
    this.data_base = new DataBase()
    this.environment.register()
  }
  public async initServer() {
    try {
      await this.environment.register()
      await this.data_base.dbInit()
      console.log("DB sucess to connect")
    } catch {
      console.log("Falha ao iniciar o banco de dados")
    }
    server_hosting()
  }
}
