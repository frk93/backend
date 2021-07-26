import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudentUpdateInput } from "../../../inputs/StudentUpdateInput";
import { StudentWhereUniqueInput } from "../../../inputs/StudentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateStudentArgs {
  @TypeGraphQL.Field(_type => StudentUpdateInput, {
    nullable: false
  })
  data!: StudentUpdateInput;

  @TypeGraphQL.Field(_type => StudentWhereUniqueInput, {
    nullable: false
  })
  where!: StudentWhereUniqueInput;
}
