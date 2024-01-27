import { randomUUID } from "crypto"
import { FastifyServerOptions } from "fastify"

export const fastifyConfig: FastifyServerOptions = {
  // DEfined the server timeout in milliseconds
  connectionTimeout: 0,

  // Defines the server keep-alive timeout in milliseconds.
  keepAliveTimeout: 5000,

  // Ignore trailing slash into routes.
  ignoreTrailingSlash: true,

  // Max params length, useful to avoid DoS attacks.
  maxParamLength: 200,

  // Defines the maximum payload accepted by the server.
  bodyLimit: 1048576 * 60,

  // Options for Pino logger.
  logger: {
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
        translateTime: 'HH:MM:ss Z',
      }
    }
  },

  // Enable or disable request and response logging
  disableRequestLogging: false,

  // Case sensitive on routes
  caseSensitive: false,

  // Property to lookup on request to propagate request-id
  requestIdHeader: "correlation-id",

  // Defines the label used for the request identifier when logging the request.
  requestIdLogLabel: "request-id",

  // Function for generating the request id. It will receive the incoming request as a parameter.
  genReqId: () => randomUUID({ disableEntropyCache: false }),

  // The X-forwarded-* header fields may be trusted.
  trustProxy: true,

  // The maximum amount of time in milliseconds in which a plugin can load.
  pluginTimeout: 20000,

  // Automatically creates a sibling HEAD route for each GET route defined
  exposeHeadRoutes: false,

  // Return 503 after calling close server method. If false, the server routes the incoming request as usual.
  return503OnClosing: true,

  // Configure the ajv instance
  ajv: {
    customOptions: {
      removeAdditional: true,
      useDefaults: true,
      coerceTypes: true,
      allErrors: true
    },
    plugins: []
  }
}
