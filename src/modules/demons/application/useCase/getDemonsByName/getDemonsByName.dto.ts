import { FastifyRequest } from "fastify"

export interface UseCaseProps {
    name: string
}

export interface CustomRequest extends FastifyRequest {
    name: string
}