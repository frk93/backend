import { Column, CreateDateColumn, Entity, EntityManager, Index, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { generateToken } from "../../jobs/periodic/fetch/utils/verification";
import { generateStatusChangeURLFromToken } from "../interest-confirmation/tutoring/notify/urls";
import { Pupil } from "./Pupil";


export enum InterestConfirmationStatus {
    PENDING = "pending",
    CONFIRMED = "confirmed",
    REFUSED = "refused"
}

@Entity()
export class PupilTutoringInterestConfirmationRequest {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date;

    @Column({
        enum: InterestConfirmationStatus,
        default: InterestConfirmationStatus.PENDING
    })
    status: InterestConfirmationStatus;

    @Index({ unique: true })
    @Column({
        nullable: false
    })
    token: string;

    @Column({
        nullable: true,
        default: null
    })
    reminderSentDate?: Date;

    @OneToOne((type) => Pupil, (pupil) => pupil.tutoringInterestConfirmationRequest, {
        eager: false
    })
    @JoinColumn()
    pupil: Pupil;

    hasSentReminder(): boolean {
        return this.reminderSentDate != null;
    }

    constructor(pupil: Pupil, token: string) {
        this.pupil = pupil;
        this.token = token;
    }

    confirmationURL(): string {
        return generateStatusChangeURLFromToken(this.token, true);
    }
    refusalURL(): string {
        return generateStatusChangeURLFromToken(this.token, false);
    }
}

export async function createUniqueToken(manager: EntityManager): Promise<string> {
    let generatedToken: string;
    do {
        generatedToken = generateToken(); //TODO: improve token generation, or at least its import path
    }
    while (await manager.findOne(PupilTutoringInterestConfirmationRequest, { token: generatedToken }));

    return generatedToken;
}