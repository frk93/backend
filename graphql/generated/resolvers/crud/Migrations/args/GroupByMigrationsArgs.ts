import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MigrationsOrderByInput } from "../../../inputs/MigrationsOrderByInput";
import { MigrationsScalarWhereWithAggregatesInput } from "../../../inputs/MigrationsScalarWhereWithAggregatesInput";
import { MigrationsWhereInput } from "../../../inputs/MigrationsWhereInput";
import { MigrationsScalarFieldEnum } from "../../../../enums/MigrationsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMigrationsArgs {
  @TypeGraphQL.Field(_type => MigrationsWhereInput, {
    nullable: true
  })
  where?: MigrationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MigrationsOrderByInput], {
    nullable: true
  })
  orderBy?: MigrationsOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [MigrationsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "timestamp" | "name">;

  @TypeGraphQL.Field(_type => MigrationsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MigrationsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
