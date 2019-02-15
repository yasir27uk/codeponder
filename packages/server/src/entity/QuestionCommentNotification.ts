import { Field, ObjectType } from "type-graphql";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { Comment } from "./Comment";
import { Question } from "./Question";
import { User } from "./User";

@Entity()
@ObjectType()
export class QuestionCommentNotification {
  @Field(() => Comment)
  @ManyToOne(() => Comment)
  comment: Promise<Comment>;
  @Field()
  @PrimaryColumn("uuid")
  commentId: string;

  @ManyToOne(() => Question, { onDelete: "CASCADE" })
  question: Promise<Question>;
  @Field()
  @PrimaryColumn("uuid")
  questionId: string;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: "questionAskerId" })
  questionAsker: Promise<User>;
  @Field()
  @Column("uuid")
  questionAskerId: string;

  @Field()
  @Column()
  read: boolean;

  @Field()
  @CreateDateColumn({ type: "timestamp with time zone" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp with time zone" })
  updatedAt: Date;
}