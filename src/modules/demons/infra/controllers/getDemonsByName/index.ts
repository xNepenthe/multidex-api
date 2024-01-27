import { GetDemonsByNameUseCase } from "../../../application/useCase/getDemonsByName/getDemonsByName.uc"
import { GetDemonsByNameController } from "./getDemonsByName.ctrl"

const getDemonsByNameUC = new GetDemonsByNameUseCase()
const getDemonsByNameController = new GetDemonsByNameController(getDemonsByNameUC)

export { getDemonsByNameController }
