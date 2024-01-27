import { GetDemonsUseCase } from "../../../application/useCase/getDemons/getDemons.uc"
import { GetDemonsController } from "./getDemons.ctrl"

const getDemonsUC = new GetDemonsUseCase()
const getDemonsController = new GetDemonsController(getDemonsUC)

export { getDemonsController }
