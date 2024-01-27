import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify"
import { getDemonsController } from "./controllers/getDemons"
import { getDemonsByNameController } from "./controllers/getDemonsByName"
import { CustomRequest } from "../application/useCase/getDemonsByName/getDemonsByName.dto"

export async function getDemons(server: FastifyInstance, _opts: FastifyPluginOptions) {
  server.route({
    method: "GET",
    url: "/demons",
    handler: async (req: FastifyRequest, res: FastifyReply) => getDemonsController.exec(req, res)
  })
}

export async function getDemonsByName(server: FastifyInstance, _opts: FastifyPluginOptions) {
    server.route({
      method: "GET",
      url: "/demons/:name",
      handler: async (req: FastifyRequest, res: FastifyReply) => getDemonsByNameController.exec(req, res)
    })
  }