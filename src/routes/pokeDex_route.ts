import { process_request } from "middlewares/adapter_middleware"
import { ValidatorSchema } from "middlewares/validator"
import { Router } from "express"
import PokeDexRepository from "@infrastructure/repositories/poketeam_repository"
import PokeDexUseCase from "@applications/usecases/contracts_usecase"
import { PokedexPostSchema } from "@infrastructure/validations/pokeTeam.validation"

const pokeDex_routes = Router()
const pokeDex_repository = new PokeDexRepository()
const pokeDex_usecase = new PokeDexUseCase(pokeDex_repository)

pokeDex_routes.get("/pokedex/teams", process_request(pokeDex_usecase.getAllTeam.bind(pokeDex_usecase)))

pokeDex_routes.post(
  "/pokedex/teams",
  ValidatorSchema(PokedexPostSchema),
  process_request(pokeDex_usecase.createTeam.bind(pokeDex_usecase)),
)
// pokeDex_routes.get("/users/:id", process_request(users_usecase.getUsersById.bind(users_usecase)))
// pokeDex_routes.put(
//   "/users/:id",
//   ValidatorSchema(UserPostSchema),
//   process_request(users_usecase.updateUsers.bind(users_usecase)),
// )
// pokeDex_routes.delete("/users/:id", process_request(users_usecase.deleteUsers.bind(users_usecase)))

export { pokeDex_routes }
