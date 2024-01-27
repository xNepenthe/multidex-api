import { BaseUseCase } from "../../../../../core/BaseUseCase"
import { UseCaseProps, UseCaseResult } from "./getDemons.dto"
import { Demon } from "megaten"

export class GetDemonsUseCase implements BaseUseCase<UseCaseProps, UseCaseResult> {
  public async exec(): Promise<UseCaseResult> {
    return Demon.array
  }
}
