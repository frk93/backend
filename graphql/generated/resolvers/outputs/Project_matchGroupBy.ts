import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Project_matchAvgAggregate } from "../outputs/Project_matchAvgAggregate";
import { Project_matchCountAggregate } from "../outputs/Project_matchCountAggregate";
import { Project_matchMaxAggregate } from "../outputs/Project_matchMaxAggregate";
import { Project_matchMinAggregate } from "../outputs/Project_matchMinAggregate";
import { Project_matchSumAggregate } from "../outputs/Project_matchSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Project_matchGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  uuid!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  dissolved!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  dissolveReason!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  studentId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  pupilId!: number | null;

  @TypeGraphQL.Field(_type => Project_matchCountAggregate, {
    nullable: true
  })
  _count!: Project_matchCountAggregate | null;

  @TypeGraphQL.Field(_type => Project_matchAvgAggregate, {
    nullable: true
  })
  _avg!: Project_matchAvgAggregate | null;

  @TypeGraphQL.Field(_type => Project_matchSumAggregate, {
    nullable: true
  })
  _sum!: Project_matchSumAggregate | null;

  @TypeGraphQL.Field(_type => Project_matchMinAggregate, {
    nullable: true
  })
  _min!: Project_matchMinAggregate | null;

  @TypeGraphQL.Field(_type => Project_matchMaxAggregate, {
    nullable: true
  })
  _max!: Project_matchMaxAggregate | null;
}