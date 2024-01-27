import { BaseUseCase } from "../../../../../core/BaseUseCase"
import { UseCaseProps } from "./getDemonsByName.dto"
import { AnyDemon, Demon } from "megaten"

export class GetDemonsByNameUseCase implements BaseUseCase<UseCaseProps, AnyDemon | null> {
  public async exec(props: UseCaseProps): Promise<AnyDemon | null> {
    const demon = Demon.get(props.name)

    return demon
  }
}
