import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "src/database/database.sqlite",
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: ["src/database/migrations/*.ts"],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
