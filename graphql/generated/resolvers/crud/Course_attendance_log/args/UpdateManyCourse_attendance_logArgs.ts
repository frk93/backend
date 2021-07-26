import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Course_attendance_logUpdateManyMutationInput } from "../../../inputs/Course_attendance_logUpdateManyMutationInput";
import { Course_attendance_logWhereInput } from "../../../inputs/Course_attendance_logWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCourse_attendance_logArgs {
  @TypeGraphQL.Field(_type => Course_attendance_logUpdateManyMutationInput, {
    nullable: false
  })
  data!: Course_attendance_logUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Course_attendance_logWhereInput, {
    nullable: true
  })
  where?: Course_attendance_logWhereInput | undefined;
}
