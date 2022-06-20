import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1655335921442 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "userId",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "userName",
            type: "varchar",
          },
          {
            name: "userEmail",
            type: "varchar",
          },
          {
            name: "userPassword",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable("users");
  }
}
