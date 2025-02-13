// import { Sequelize } from "sequelize";
// import dotenv from "dotenv";

// dotenv.config();

// const sequelize = new Sequelize({
// 	dialect: "postgres",
// 	host: process.env.PG_HOST,
// 	port: process.env.PG_PORT,
// 	username: process.env.PG_USERNAME,
// 	password: process.env.PG_PASSWORD,
// 	database: process.env.PG_DATABASE,
// 	logging: false,
// 	dialectOptions: {
// 		ssl: {
// 			require: true,
// 			rejectUnauthorized: false,
// 		},
// 	},
// });

// export { sequelize };

/*
NOTE:
- This file sets up the database connection using Sequelize.
- It reads database credentials from environment variables using dotenv.
- SSL is enabled to ensure secure connections, especially for cloud databases.
- Logging is disabled to keep console output clean.
- This setup is useful when working with a real database, but in the current project, a local JSON file is being used instead.
*/
