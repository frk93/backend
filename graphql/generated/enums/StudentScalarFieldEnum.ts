import * as TypeGraphQL from "type-graphql";

export enum StudentScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  firstname = "firstname",
  lastname = "lastname",
  active = "active",
  email = "email",
  verification = "verification",
  verifiedAt = "verifiedAt",
  authToken = "authToken",
  authTokenUsed = "authTokenUsed",
  authTokenSent = "authTokenSent",
  wix_id = "wix_id",
  wix_creation_date = "wix_creation_date",
  phone = "phone",
  feedback = "feedback",
  newsletter = "newsletter",
  isStudent = "isStudent",
  subjects = "subjects",
  openMatchRequestCount = "openMatchRequestCount",
  isInstructor = "isInstructor",
  msg = "msg",
  state = "state",
  university = "university",
  module = "module",
  moduleHours = "moduleHours",
  isProjectCoach = "isProjectCoach",
  wasJufoParticipant = "wasJufoParticipant",
  hasJufoCertificate = "hasJufoCertificate",
  jufoPastParticipationInfo = "jufoPastParticipationInfo",
  jufoPastParticipationConfirmed = "jufoPastParticipationConfirmed",
  isUniversityStudent = "isUniversityStudent",
  openProjectMatchRequestCount = "openProjectMatchRequestCount",
  sentJufoAlumniScreeningReminderCount = "sentJufoAlumniScreeningReminderCount",
  lastSentJufoAlumniScreeningInvitationDate = "lastSentJufoAlumniScreeningInvitationDate",
  supportsInDaZ = "supportsInDaZ",
  languages = "languages",
  sentScreeningReminderCount = "sentScreeningReminderCount",
  lastSentScreeningInvitationDate = "lastSentScreeningInvitationDate",
  sentInstructorScreeningReminderCount = "sentInstructorScreeningReminderCount",
  lastSentInstructorScreeningInvitationDate = "lastSentInstructorScreeningInvitationDate",
  lastUpdatedSettingsViaBlocker = "lastUpdatedSettingsViaBlocker",
  registrationSource = "registrationSource"
}
TypeGraphQL.registerEnumType(StudentScalarFieldEnum, {
  name: "StudentScalarFieldEnum",
  description: undefined,
});