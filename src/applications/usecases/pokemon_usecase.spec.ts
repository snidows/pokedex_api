import PokedexUseCase from "./pokemon_usecase"
import { pokedexRepositorySpy, teamMockInput, teamMockInputError, teamMockOutput, teamsMockByPlayers } from "../../mocks/pokedex.mocks"
import { left, right } from "../../shared/either"
import {InternalError} from "../errors/internal_error"

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
    const team = result.value
    //assert
    expect(team).toMatchObject(teamMockInput)

  })
  it("CreateTeam() bd offline", async () => {
    //arrange
    const { sut } = makeSut()
    jest
      .spyOn(pokedexRepositorySpy, "createTeam")
      .mockResolvedValueOnce(left(new Error()))
    //act
    const result = await sut.createTeam(teamMockInputError)
    //assert
    expect(result.isLeft()).toBeTruthy()
    expect(result.value).toBeInstanceOf(InternalError)
  })

  it("getAllTeam()", async () => {
    //arrange
    const { sut } = makeSut()
    jest.spyOn(pokedexRepositorySpy, "getAllTeamsByPlayerName").mockResolvedValueOnce(right(teamsMockByPlayers))
    //act
    await sut.getAllTeam("lucas")
    //assert
    expect(pokedexRepositorySpy.getAllTeamsByPlayerName).toHaveBeenCalledTimes(1)
    expect(pokedexRepositorySpy.getAllTeamsByPlayerName).toHaveBeenCalledWith("lucas")
  })

  it("getTeamById()", async () => {
    //arrange
    const { sut } = makeSut()
    jest.spyOn(pokedexRepositorySpy, "getTeamById").mockResolvedValueOnce(right(teamMockOutput))
    //act
    await sut.getTeamById(90)
    // //assert
    expect(pokedexRepositorySpy.getTeamById).toHaveBeenCalledTimes(1)
    expect(pokedexRepositorySpy.getTeamById).toHaveBeenCalledWith(teamMockOutput.id)
    
  })
  it("getTeamById() bd offline", async () => {
    //arrange
    const { sut } = makeSut()
    jest.spyOn(pokedexRepositorySpy, "getTeamById").mockResolvedValueOnce(left(new InternalError()))
    //act
    const result = await sut.getTeamById(90)
    const team = result.value
    // //assert
    expect(pokedexRepositorySpy.getTeamById).toHaveBeenCalledTimes(1)
    expect(result.isLeft()).toBeTruthy()
    expect(result.value).toBeInstanceOf(InternalError)
  })
  it("deleteTeamById()", async () => {
    //arrange
    const { sut } = makeSut()
    jest.spyOn(pokedexRepositorySpy, "deleteTeamById").mockResolvedValueOnce(right(true))
    //act
    await sut.deleteTeamById(90)
    // //assert
    expect(pokedexRepositorySpy.deleteTeamById).toHaveBeenCalledTimes(1)
    expect(pokedexRepositorySpy.deleteTeamById).toHaveBeenCalledWith(teamMockOutput.id)
    
  })
  it("deleteTeamById() bd offline", async () => {
    //arrange
    const { sut } = makeSut()
    jest.spyOn(pokedexRepositorySpy, "deleteTeamById").mockResolvedValueOnce(left(new InternalError()))
    //act
    const result = await sut.deleteTeamById(90)
    // //assert
    expect(pokedexRepositorySpy.deleteTeamById).toHaveBeenCalledTimes(1)
    expect(result.isLeft()).toBeTruthy()
    expect(result.value).toBeInstanceOf(InternalError)
  })
})
