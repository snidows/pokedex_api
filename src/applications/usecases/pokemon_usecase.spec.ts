import PokedexUseCase from "./pokemon_usecase"
import { pokedexRepositorySpy, teamMockInput, teamMockOutput } from "../../mocks/pokedex.mocks"
import { right } from "../../shared/either"
const makeSut = () => {
  const sut = new PokedexUseCase(pokedexRepositorySpy)

  return { sut }
}

describe("PokedexUseCase", () => {
  beforeEach(() => {
    jest.clearAllMocks()
    jest.resetAllMocks()
  })
  it("CreateTeam()", async () => {
    //arrange
    const { sut } = makeSut()
    jest.spyOn(pokedexRepositorySpy, "createTeam").mockResolvedValueOnce(right(teamMockOutput))
    //act
    const result = await sut.createTeam(teamMockInput)
    const team=result.value;
    //assert
    expect(team).toMatchObject(teamMockInput)
    console.log(team)
    
  })
})
