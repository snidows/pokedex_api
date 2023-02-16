import { process_request } from "@middlewares/adapter_middleware"
import { ValidatorSchema } from "@middlewares/validator"
import { Router } from "express"
import PokeDexRepository from "@infrastructure/repositories/poketeam_repository"
import PokeDexUseCase from "@applications/usecases/pokemon_usecase"
import { PokedexPostSchema } from "@infrastructure/validations/pokeTeam.validation"
import PokedexController from "@interfaces/controllers/pokedex_controller"

const pokeDex_routes = Router()
const pokeDex_repository = new PokeDexRepository()
const pokeDex_usecase = new PokeDexUseCase(pokeDex_repository)
const pokedex_controller = new PokedexController(pokeDex_usecase)

pokeDex_routes.get("/pokedex/teams", process_request(pokedex_controller.getAll.bind(pokedex_controller)))

pokeDex_routes.post(
  "/pokedex/teams",
  ValidatorSchema(PokedexPostSchema),
  process_request(pokedex_controller.post.bind(pokedex_controller)),
)

pokeDex_routes.delete("/pokedex/teams/:id", process_request(pokedex_controller.delete.bind(pokedex_controller)))

// pokeDex_routes.get("/users/:id", process_request(users_usecase.getUsersById.bind(users_usecase)))
// pokeDex_routes.put(
//   "/users/:id",
//   ValidatorSchema(UserPostSchema),
//   process_request(users_usecase.updateUsers.bind(users_usecase)),
// )
// pokeDex_routes.delete("/users/:id", process_request(users_usecase.deleteUsers.bind(users_usecase)))

export { pokeDex_routes }
