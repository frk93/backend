import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Concrete_notificationOrderByInput } from "../../../inputs/Concrete_notificationOrderByInput";
import { Concrete_notificationWhereInput } from "../../../inputs/Concrete_notificationWhereInput";
import { Concrete_notificationWhereUniqueInput } from "../../../inputs/Concrete_notificationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateConcrete_notificationArgs {
  @TypeGraphQL.Field(_type => Concrete_notificationWhereInput, {
    nullable: true
  })
  where?: Concrete_notificationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Concrete_notificationOrderByInput], {
    nullable: true
  })
  orderBy?: Concrete_notificationOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => Concrete_notificationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Concrete_notificationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}