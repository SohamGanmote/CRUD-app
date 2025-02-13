import { Router } from "express";
import {
	deletePostById,
	getPosts,
	getPostsById,
	postPost,
	updatePost,
} from "../controller/post.controller.js";
// import * as auth from "../middleware/auth.js";

const router = Router();

// router.use(auth.authMiddleware);

router.get("/", getPosts);
router.get("/:post_id", getPostsById);
router.post("/", postPost);
router.put("/:post_id", updatePost);
router.delete("/:post_id", deletePostById);

const faqsRouter = router;
export default faqsRouter;

/*
NOTE:
- The JWT package is not being used in this file, but authentication would work something like this.
- By using `router.use(auth.authMiddleware);`, all routes would require authentication before they can be accessed.
- The middleware would check for a valid JWT token in the request headers and verify it before allowing access.
*/
