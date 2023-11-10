import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  type: "postgres",
  url: process.env.DB_POSTGRES,
  synchronize: true,
})
