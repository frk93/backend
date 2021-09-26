import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { project_field_with_grade_restriction_projectfield_enum } from "../../enums/project_field_with_grade_restriction_projectfield_enum";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class Enumproject_field_with_grade_restriction_projectfield_enumFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => project_field_with_grade_restriction_projectfield_enum, {
    nullable: true
  })
  set?: "Arbeitswelt" | "Biologie" | "Chemie" | "Geo_und_Raumwissenschaften" | "Mathematik_Informatik" | "Physik" | "Technik" | undefined;
}
