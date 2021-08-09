import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateCourse_instructors_studentArgs } from "./args/UpdateCourse_instructors_studentArgs";
import { Course_instructors_student } from "../../../models/Course_instructors_student";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Course_instructors_student)
export class UpdateCourse_instructors_studentResolver {
  @TypeGraphQL.Mutation(_returns => Course_instructors_student, {
    nullable: true
  })
  async updateCourse_instructors_student(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateCourse_instructors_studentArgs): Promise<Course_instructors_student | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).course_instructors_student.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}