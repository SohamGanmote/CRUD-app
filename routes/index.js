import { Router } from "express";

import postRouter from "./post.router.js";

const router = Router();

router.use("/posts", postRouter);

export default router;
