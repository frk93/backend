import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { language } from "../../enums/language";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PupilUpdatelanguagesInput {
  @TypeGraphQL.Field(_type => [language], {
    nullable: true
  })
  set?: Array<"sq" | "ar" | "hy" | "az" | "bs" | "bg" | "zh" | "de" | "en" | "fr" | "it" | "kk" | "ku" | "pl" | "pt" | "ru" | "tr" | "es" | "uk" | "vi" | "other"> | undefined;

  @TypeGraphQL.Field(_type => [language], {
    nullable: true
  })
  push?: Array<"sq" | "ar" | "hy" | "az" | "bs" | "bg" | "zh" | "de" | "en" | "fr" | "it" | "kk" | "ku" | "pl" | "pt" | "ru" | "tr" | "es" | "uk" | "vi" | "other"> | undefined;
}
