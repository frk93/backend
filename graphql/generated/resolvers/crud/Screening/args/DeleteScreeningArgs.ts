import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ScreeningWhereUniqueInput } from "../../../inputs/ScreeningWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteScreeningArgs {
  @TypeGraphQL.Field(_type => ScreeningWhereUniqueInput, {
    nullable: false
  })
  where!: ScreeningWhereUniqueInput;
}
