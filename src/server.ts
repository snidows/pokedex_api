import express, { Express } from "express"
import * as routes from "@routes/index"
const body_parser = require("body-parser")
export const server_hosting = (): Express => {
  const app = express()
  const port = 4444
  const cors = require("cors")

  app.use(
    cors({
      origin: "*",
      credentials: true,
    }),
  )
  app.use(body_parser.json())
  app.use(
    routes.pokeDex_routes
  )

  app.listen(port, () => {
    console.log(`API started on port: ${port}`)
  })
  return app
}
