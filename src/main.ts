import { AppModule } from "appModule"

async function start() {
  const app_module = new AppModule()
  try {
    await app_module.initServer()
  } catch (err) {
    console.log(err)
  }
}
start()
