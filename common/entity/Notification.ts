import {Column, Entity, Index, PrimaryColumn } from "typeorm";

/* This definition just exists because of the double maintenance of TypeORM and Prisma.
   For queries, use Prisma! */

export enum NotificationRecipient {
    USER,
    TEACHER,
    PARENT
  }

// A Notification is actually something maintained in one or multiple external systems, e.g. a Mailjet Template
// Yet we have to store some meta information for a Notification, which we do in this model:
@Entity()
class Notification {
    @PrimaryColumn()
    id: number;

    @Column()
    description: string;

    // In case of emergency we might want to quickly switch of some notifications, also some might be at "draft" stage first
    @Column()
    active: boolean;

    // Sometimes we want to send an Email not to the user directly, but to another email that is in a 1 to 1 relationship to the user
    @Column()
    recipient: NotificationRecipient;
    // If a user triggers an action, this Notification will be sent, or if it is a reminder it gets scheduled for the future
    @Column()
    onActions: string[];
    @Column()
    category: string[];

    // Reminders additionally have these attributes set:
    // If the user takes one of these actions, the reminder gets cancelled
    @Column()
    cancelledOnAction: string[];
    @Column({ type: "int", nullable: true })
    delay?: number;
    @Column({ type: "int", nullable: true })
    interval?: number;
}