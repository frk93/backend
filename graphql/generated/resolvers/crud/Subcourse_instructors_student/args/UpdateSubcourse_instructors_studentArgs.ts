import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Subcourse_instructors_studentUpdateInput } from "../../../inputs/Subcourse_instructors_studentUpdateInput";
import { Subcourse_instructors_studentWhereUniqueInput } from "../../../inputs/Subcourse_instructors_studentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSubcourse_instructors_studentArgs {
  @TypeGraphQL.Field(_type => Subcourse_instructors_studentUpdateInput, {
    nullable: false
  })
  data!: Subcourse_instructors_studentUpdateInput;

  @TypeGraphQL.Field(_type => Subcourse_instructors_studentWhereUniqueInput, {
    nullable: false
  })
  where!: Subcourse_instructors_studentWhereUniqueInput;
}
