import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Project_matchCreateWithoutPupilInput } from "../inputs/Project_matchCreateWithoutPupilInput";
import { Project_matchUpdateWithoutPupilInput } from "../inputs/Project_matchUpdateWithoutPupilInput";
import { Project_matchWhereUniqueInput } from "../inputs/Project_matchWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class Project_matchUpsertWithWhereUniqueWithoutPupilInput {
  @TypeGraphQL.Field(_type => Project_matchWhereUniqueInput, {
    nullable: false
  })
  where!: Project_matchWhereUniqueInput;

  @TypeGraphQL.Field(_type => Project_matchUpdateWithoutPupilInput, {
    nullable: false
  })
  update!: Project_matchUpdateWithoutPupilInput;

  @TypeGraphQL.Field(_type => Project_matchCreateWithoutPupilInput, {
    nullable: false
  })
  create!: Project_matchCreateWithoutPupilInput;
}