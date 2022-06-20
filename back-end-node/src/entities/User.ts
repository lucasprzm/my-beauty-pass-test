import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
export class User {
  @PrimaryColumn()
  readonly userId: string;

  @Column()
  userName: string;

  @Column()
  userEmail: string;

  @Column()
  userPassword: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.userId) {
      this.userId = uuid();
    }
  }
}
