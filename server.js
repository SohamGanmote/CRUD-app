import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import { errorHandler, URLnotFoundHandler } from "./utils/errors.util.js";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({ origin: "*" }));

app.use("/api", router);

app.use(URLnotFoundHandler);
app.use(errorHandler);

app.listen(port, "0.0.0.0", () => {
	console.log(`Server started on port ${port}.`);
});
