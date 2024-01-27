import { FastifyReply, FastifyRequest } from "fastify"
import { BaseController } from "../../../../../core/BaseController"
import { GetDemonsUseCase } from "../../../application/useCase/getDemons/getDemons.uc"

export class GetDemonsController extends BaseController {
  private getDemonsUseCase: GetDemonsUseCase

  constructor(getDemonsUseCase: GetDemonsUseCase) {
    super()
    this.getDemonsUseCase = getDemonsUseCase
  }

  public async exec(req: FastifyRequest, res: FastifyReply) {
    req.log.info(`[getDemons] New request`)
    const result = await this.getDemonsUseCase.exec()
    return this.ok(res, result)
  }
}
