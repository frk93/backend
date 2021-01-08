import { Course } from "../../entity/Course";
import { Subcourse } from "../../entity/Subcourse";
import { mailjetTemplates, sendTemplateMail, sendTextEmail } from "../index";
import * as moment from "moment-timezone";
import { getLogger } from "log4js";
import { Student } from "../../entity/Student";
import { Pupil } from "../../entity/Pupil";
import { DEFAULTSENDERS } from "../config";

const logger = getLogger();

export async function sendSubcourseCancelNotifications(course: Course, subcourse: Subcourse) {

    if (subcourse.lectures.length == 0) {
        logger.info("No lectures found: no cancellation mails sent for subcourse " + subcourse.id + " of course " + course.name);
        return;
    }

    // Find first lecture, subcourse lectures are eagerly loaded
    let firstLecture = subcourse.lectures[0].start;
    for (let i = 1; i < subcourse.lectures.length; i++) {
        if (subcourse.lectures[i].start < firstLecture) {
            firstLecture = subcourse.lectures[i].start;
        }
    }

    // Send mail or this lecture to each participant
    logger.info("Sending cancellation mails for subcourse " + subcourse.id + " of course " + course.name + " to " + subcourse.participants.length + " participants");
    for (let participant of subcourse.participants) {
        const mail = mailjetTemplates.COURSESCANCELLED({
            participantFirstname: participant.firstname,
            courseName: course.name,
            firstLectureDate: moment(firstLecture).format("DD.MM.YYYY"),
            firstLectureTime: moment(firstLecture).format("HH:mm")
        });
        await sendTemplateMail(mail, participant.email);
    }
}

export async function sendCourseUpcomingReminderInstructor(instructor: Student, course: Course, firstLecture: Date) {
    const mail = mailjetTemplates.COURSESUPCOMINGREMINDERINSTRUCTOR({
        participantFirstname: instructor.firstname,
        courseName: course.name,
        firstLectureDate: moment(firstLecture).format("DD.MM.YYYY"),
        firstLectureTime: moment(firstLecture).format("HH:mm")
    });
    await sendTemplateMail(mail, instructor.email);
}

export async function sendCourseUpcomingReminderParticipant(participant: Pupil, course: Course, firstLecture: Date) {
    const mail = mailjetTemplates.COURSESUPCOMINGREMINDERPARTICIPANT({
        participantFirstname: participant.firstname,
        courseName: course.name,
        firstLectureDate: moment(firstLecture).format("DD.MM.YYYY"),
        firstLectureTime: moment(firstLecture).format("HH:mm")
    });
    await sendTemplateMail(mail, participant.email);
}

export async function sendInstructorGroupMail(participant: Pupil, instructor: Student, course: Course, messageTitle: string, messageBody: string) {
    const mail = mailjetTemplates.COURSEINSTRUCTORGROUPMAIL({
        participantFirstName: participant.firstname,
        instructorFirstName: instructor.firstname,
        courseName: course.name,
        messageTitle: messageTitle,
        messageBody: messageBody,
        instructorMail: instructor.email
    });

    await sendTemplateMail(mail, participant.email, instructor.email);
}

export async function sendParticipantRegistrationConfirmationMail(participant: Pupil, course: Course, subcourse: Subcourse) {
    const firstLecture = subcourse.firstLecture();

    if (!firstLecture) {
        throw new Error(`Cannot send registration confirmation mail for subcourse with ID ${subcourse.id}, because that course has no specified first lecture`);
    }

    const firstLectureMoment = moment(firstLecture.start);

    const mail = mailjetTemplates.COURSESPARTICIPANTREGISTRATIONCONFIRMATION({
        participantFirstname: participant.firstname,
        courseName: course.name,
        courseId: String(course.id),
        firstLectureDate: firstLectureMoment.format("DD.MM.YYYY"),
        firstLectureTime: firstLectureMoment.format("HH:mm"),
        authToken: participant.authToken
    });

    await sendTemplateMail(mail, participant.email);
}

export async function sendParticipantToInstructorMail(participant: Pupil, instructor: Student, course: Course, messageTitle: string, messageBody: string) {
    await sendTextEmail(
        `[${course.name}] ${messageTitle}`, //subject
        messageBody, //email text
        DEFAULTSENDERS.noreply, //sender address
        instructor.email, //receiver
        `${participant.fullName()} via Corona School`, //sender name
        `${instructor.fullName()}`, //receiver name
        participant.email, //replyTo address
        `${participant.fullName()}` //replyTo name
    );
}