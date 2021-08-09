import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Participation_certificateOrderByInput } from "../../../inputs/Participation_certificateOrderByInput";
import { Participation_certificateWhereInput } from "../../../inputs/Participation_certificateWhereInput";
import { Participation_certificateWhereUniqueInput } from "../../../inputs/Participation_certificateWhereUniqueInput";
import { Participation_certificateScalarFieldEnum } from "../../../../enums/Participation_certificateScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class PupilParticipation_certificateArgs {
  @TypeGraphQL.Field(_type => Participation_certificateWhereInput, {
    nullable: true
  })
  where?: Participation_certificateWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Participation_certificateOrderByInput], {
    nullable: true
  })
  orderBy?: Participation_certificateOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => Participation_certificateWhereUniqueInput, {
    nullable: true
  })
  cursor?: Participation_certificateWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Participation_certificateScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "uuid" | "subjects" | "categories" | "certificateDate" | "startDate" | "endDate" | "hoursPerWeek" | "hoursTotal" | "medium" | "ongoingLessons" | "state" | "signaturePupil" | "signatureParent" | "signatureLocation" | "signatureDate" | "studentId" | "pupilId"> | undefined;
}