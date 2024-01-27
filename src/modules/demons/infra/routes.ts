import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify"
import { getDemonsController } from "./controllers/getDemons"
export async function getDemons(server: FastifyInstance, _opts: FastifyPluginOptions) {
  server.route({
    method: "GET",
    url: "/demons",
    handler: async (req: FastifyRequest, res: FastifyReply) => getDemonsController.exec(req, res)
  })
}
