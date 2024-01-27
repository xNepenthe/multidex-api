import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify"
import { getDemons, getDemonsByName } from "../../modules/demons/infra/routes"

export default async (server: FastifyInstance, opts: FastifyPluginOptions) => {
  await getDemons(server, opts)
  await getDemonsByName(server, opts)
  await healthcheck(server, opts)
}

async function healthcheck(server: FastifyInstance, _opts: FastifyPluginOptions) {
  server.route({
    method: "GET",
    url: "/health",
    handler: (_req: FastifyRequest, res: FastifyReply) => res.type("application/JSON").code(200).send("OK")
  })
}
