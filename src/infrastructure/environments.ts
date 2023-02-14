import config from "dotenv"
import { IEnvironments } from "interfaces/IEnvironments"
const dotEnv = config
export class Environment implements IEnvironments {
  constructor() {}

  public async register(): Promise<void> {
    const nodedEnv = process.env.NODE_ENV || "dev"
    dotEnv.config({ path: `.params.${nodedEnv}` })
  }
}
