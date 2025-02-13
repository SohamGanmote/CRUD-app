import { v4 as uuidv4 } from "uuid";
import { readData, writeData } from "../utils/file-system.util.js";

export const getPosts = async (req, res) => {
	try {
		const posts = readData();

		const page = parseInt(req.query.page) || 1;
		const limit = parseInt(req.query.limit) || 5;

		const startIndex = (page - 1) * limit;
		const endIndex = page * limit;

		const paginatedPosts = posts.slice(startIndex, endIndex);

		const pagination = {
			currentPage: page,
			limit: limit,
			totalPosts: posts.length,
			totalPages: Math.ceil(posts.length / limit),
		};

		return res.status(200).json({ pagination, data: paginatedPosts });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "Internal server error", error });
	}
};

export const getPostsById = async (req, res) => {
	try {
		const posts = readData();
		const post = posts.find((p) => p.post_id === req.params.post_id);

		if (!post) {
			return res.status(404).json({ message: "Post not found" });
		}

		return res.status(200).json(post);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "Internal server error", error });
	}
};

export const postPost = async (req, res) => {
	try {
		const { title, description, author } = req.body;

		if (!title || !description || !author) {
			return res.status(400).json({ message: "All fields are required" });
		}

		const newPost = {
			post_id: uuidv4(),
			title,
			description,
			author,
		};

		const posts = readData();
		posts.push(newPost);
		writeData(posts);

		return res
			.status(201)
			.json({ message: "Post created successfully", post: newPost });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "Internal server error", error });
	}
};

export const updatePost = async (req, res) => {
	try {
		const { title, description, author } = req.body;
		const posts = readData();
		const index = posts.findIndex((p) => p.post_id === req.params.post_id);

		if (index === -1) {
			return res.status(404).json({ message: "Post not found" });
		}

		if (title) posts[index].title = title;
		if (description) posts[index].description = description;
		if (author) posts[index].author = author;

		writeData(posts);
		return res
			.status(200)
			.json({ message: "Post updated successfully", post: posts[index] });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "Internal server error", error });
	}
};

export const deletePostById = async (req, res) => {
	try {
		const posts = readData();
		const filteredPosts = posts.filter((p) => p.post_id !== req.params.post_id);

		if (posts.length === filteredPosts.length) {
			return res.status(404).json({ message: "Post not found" });
		}

		writeData(filteredPosts);
		return res.status(200).json({ message: "Post deleted successfully" });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "Internal server error", error });
	}
};
