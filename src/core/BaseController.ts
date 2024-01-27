import { FastifyReply, FastifyRequest } from "fastify"
import { STATUS_CODES } from "http"

export abstract class BaseController {
  public abstract exec(req: FastifyRequest, res: FastifyReply): Promise<any>

  private async jsonResponse(reply: FastifyReply, code: number, message?: unknown): Promise<any> {
    return reply.type("application/json").code(code).send(message)
  }

  public async ok<T>(res: FastifyReply, dto?: T) {
    return this.jsonResponse(res, 200, dto ?? STATUS_CODES[200])
  }

  public async badRequest<T>(res: FastifyReply, message?: T) {
    return this.jsonResponse(res, 400, message ?? STATUS_CODES[400])
  }

  public async notFound<T>(res: FastifyReply, message?: T) {
    return this.jsonResponse(res, 404, message ?? STATUS_CODES[404])
  }

  public async internalServerRrror<T>(res: FastifyReply, message?: T) {
    return this.jsonResponse(res, 500, message ?? STATUS_CODES[500])
  }
}
