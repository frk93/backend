import { Person } from "../entity/Person";
import { Pupil } from "../entity/Pupil";
import { Student } from "../entity/Student";

export type NotificationID = string; // either our own or we reuse them from Mailjet. Maybe we can structure them a bit better
export type CategoryID = string; // categories as means to opt out from a certain category of mails
// An action is something the user does. One action might trigger / cancel multiple notifications
export type ActionID = string;
export type Email = `${string}@${string}.${string}`;

// Prisma exports lowercase types, but we want capitalized types
export {
    concrete_notification as ConcreteNotification,
    notification as Notification,
    concrete_notification_state as ConcreteNotificationState
} from '.prisma/client';



// Previously the templates had a lot of repeating fields, such as "userFirstName"
// by generalizing into a context that is partially available for each Notification, this was cleaned up
export interface NotificationContext {
    uniqueId: string;
    student?: Student; // set if the pupil is notified, and a certain student is relevant, this property is set
    pupil?: Pupil; // if the pupil is notified and a certain student is somehow relevant, this property is set
    replyToAddress? : Email;
    // As it is not quite useful to maintain the variable shape in the backend as a missmatch with the Mailjet template won't be detected anyways,
    // further props can be set at will
    [key: string]: any;
}

// The user is always known, also for notifications sent by Actions / Reminders
export interface Context extends NotificationContext {
    user: Person;
}

// Abstract away from the core: Channels are our Ports to external notification systems (Mailjet, SMS, ...)
export interface Channel {
    type: "mailjet" /* | ... */;
    send(id: string, context: Context): Promise<any>;
    canSend(id: NotificationID): boolean;
}