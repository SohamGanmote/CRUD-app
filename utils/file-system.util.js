import fs from "fs";
import path from "path";

const dbPath = path.resolve("config/database.json");

export const readData = () => {
	try {
		const data = fs.readFileSync(dbPath, "utf8");
		return JSON.parse(data);
	} catch (error) {
		console.error("Error reading database file:", error);
		return [];
	}
};

export const writeData = (data) => {
	try {
		fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), "utf8");
	} catch (error) {
		console.error("Error writing to database file:", error);
	}
};
