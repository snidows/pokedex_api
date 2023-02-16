import { Sequelize } from "sequelize"
const dot_env = require("dotenv")
const noded_env = process.env.NODE_ENV || "dev"
dot_env.config({ path: `.params.${noded_env}` })
console.log(process.env.DB_HOST)
export const sequelize = new Sequelize(
  (process.env.DB_NAME as string) || "develop",
  (process.env.DB_USER as string) || "user",
  (process.env.DB_PASSWORD as string) || "user",
  {
    host: (process.env.DB_HOST as string) || "127.0.0.1",
    dialect: "postgres",
    logging:true,
    define: {
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
    },
  },
)
