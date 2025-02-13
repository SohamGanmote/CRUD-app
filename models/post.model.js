// import { sequelize } from "../config/db.config.js";

// const Posts = sequelize.define("Posts", {
// 	post_id: {
// 		type: DataTypes.UUID,
// 		defaultValue: DataTypes.UUIDV4,
// 		allowNull: false,
// 		primaryKey: true,
// 	},
// 	title: {
// 		type: DataTypes.TEXT,
// 		allowNull: false,
// 	},
// 	description: {
// 		type: DataTypes.TEXT,
// 		allowNull: false,
// 	},
// 	author: {
// 		type: DataTypes.TEXT,
// 		allowNull: false,
// 	},
// });

// Posts.sync({ alter: true });
// Posts.sync();
// export default Posts;

/*
NOTE:
- This is how I usually define models in project.
- However, for this specific project, I am using a local JSON file to store data.
- Since there is no need to create a database table, the model definition is just for reference.
*/
