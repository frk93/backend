import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateWithoutStudentInput } from "../inputs/CourseCreateWithoutStudentInput";
import { CourseUpdateWithoutStudentInput } from "../inputs/CourseUpdateWithoutStudentInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CourseUpsertWithWhereUniqueWithoutStudentInput {
  @TypeGraphQL.Field(_type => CourseWhereUniqueInput, {
    nullable: false
  })
  where!: CourseWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseUpdateWithoutStudentInput, {
    nullable: false
  })
  update!: CourseUpdateWithoutStudentInput;

  @TypeGraphQL.Field(_type => CourseCreateWithoutStudentInput, {
    nullable: false
  })
  create!: CourseCreateWithoutStudentInput;
}