import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { mentor_expertise_enum } from "../../enums/mentor_expertise_enum";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MentorCreateManyexpertiseInput {
  @TypeGraphQL.Field(_type => [mentor_expertise_enum], {
    nullable: false
  })
  set!: Array<"language_difficulties_and_communication" | "specialized_expertise_in_subjects" | "educational_and_didactic_expertise" | "technical_support" | "self_organization">;
}