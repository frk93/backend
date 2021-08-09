import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubcourseCreateOrConnectWithoutSubcourse_instructors_studentInput } from "../inputs/SubcourseCreateOrConnectWithoutSubcourse_instructors_studentInput";
import { SubcourseCreateWithoutSubcourse_instructors_studentInput } from "../inputs/SubcourseCreateWithoutSubcourse_instructors_studentInput";
import { SubcourseUpdateWithoutSubcourse_instructors_studentInput } from "../inputs/SubcourseUpdateWithoutSubcourse_instructors_studentInput";
import { SubcourseUpsertWithoutSubcourse_instructors_studentInput } from "../inputs/SubcourseUpsertWithoutSubcourse_instructors_studentInput";
import { SubcourseWhereUniqueInput } from "../inputs/SubcourseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SubcourseUpdateOneRequiredWithoutSubcourse_instructors_studentInput {
  @TypeGraphQL.Field(_type => SubcourseCreateWithoutSubcourse_instructors_studentInput, {
    nullable: true
  })
  create?: SubcourseCreateWithoutSubcourse_instructors_studentInput | undefined;

  @TypeGraphQL.Field(_type => SubcourseCreateOrConnectWithoutSubcourse_instructors_studentInput, {
    nullable: true
  })
  connectOrCreate?: SubcourseCreateOrConnectWithoutSubcourse_instructors_studentInput | undefined;

  @TypeGraphQL.Field(_type => SubcourseUpsertWithoutSubcourse_instructors_studentInput, {
    nullable: true
  })
  upsert?: SubcourseUpsertWithoutSubcourse_instructors_studentInput | undefined;

  @TypeGraphQL.Field(_type => SubcourseWhereUniqueInput, {
    nullable: true
  })
  connect?: SubcourseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SubcourseUpdateWithoutSubcourse_instructors_studentInput, {
    nullable: true
  })
  update?: SubcourseUpdateWithoutSubcourse_instructors_studentInput | undefined;
}