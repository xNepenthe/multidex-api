import { FastifyReply, FastifyRequest } from "fastify"
import { BaseController } from "../../../../../core/BaseController"
import { GetDemonsByNameUseCase } from "../../../application/useCase/getDemonsByName/getDemonsByName.uc"
import { UseCaseProps } from "src/modules/demons/application/useCase/getDemonsByName/getDemonsByName.dto"

export class GetDemonsByNameController extends BaseController {
  private getDemonsByNameUseCase: GetDemonsByNameUseCase

  constructor(getDemonsByNameUseCase: GetDemonsByNameUseCase) {
    super()
    this.getDemonsByNameUseCase = getDemonsByNameUseCase
  }

  public async exec(req: FastifyRequest, res: FastifyReply) {
    req.log.info(`[getDemonsByName] New request`)

    const demonName = (req.params as UseCaseProps).name
    const result = await this.getDemonsByNameUseCase.exec({ name: demonName })

    if (!result) return this.badRequest(res, 'Demon not found')

    req.log.info(`[getDemonsByName] Demon found: ${result.name}`)
    
    return this.ok(res, result)
  }
}
