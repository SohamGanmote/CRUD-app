// export const authMiddleware = async (req, res, next) => {
// 	if (req.headers.authorization === null) {
// 		return res.status(401).json({
// 			status: "fail",
// 			message: "authorization token is required",
// 		});
// 	}

// 	if (!req.headers.authorization?.startsWith("Bearer")) {
// 		return res.status(401).json({
// 			status: "fail",
// 			message: "bearer token is required",
// 		});
// 	}

// 	const token = req.headers.authorization.split(" ")[1];

// 	try {
// 		const token_data = await jwt.verify(token, process.env.SECRET_KEY);

// 		if (token_data) {
// 			 logic to verify token data
// 		}

// 		next();
// 	} catch (error) {
// 		console.log(error);
// 		res.status(401).json({
// 			status: "fail",
// 			message: error.message || "an error occurred while logging in the user",
// 		});
// 	}
// };

/*
NOTE:
- This middleware is used for authentication by verifying JWT tokens.
- It checks if the Authorization header is present and correctly formatted as a Bearer token.
- If the token is missing or invalid, it returns a 401 Unauthorized response.
- The token is verified using the SECRET_KEY from environment variables.
- If the verification is successful, the request is allowed to proceed to the next middleware or route handler.
*/
