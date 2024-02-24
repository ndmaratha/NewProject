const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const User = require("../Schema/userShema");

const SignUp = asyncHandler(async (req, res) => {
	try {
		// Extract data from request body
		const { username, email, password, name } = req.body;

		// Check if user already exists
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: "User already exists" });
		}

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Create a new user
		const newUser = new User({
			name,
			username,
			email,
			password: hashedPassword,
		});
		await newUser.save();

		// Return success message
		res.status(201).json({ message: "User created successfully" });
	} catch (error) {
		console.error("Error in signup:", error);
		res.status(500).json({ message: "Internal server error" });
	}
});

const Login = asyncHandler(async (req, res) => {
	try {
		// Extract data from request body
		const { email, password } = req.body;

		// Find user by email
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		// Compare passwords
		const passwordMatch = await bcrypt.compare(password, user.password);
		if (!passwordMatch) {
			return res.status(401).json({ message: "Invalid password" });
		}
		const userDataToSend = {
			username: user.username,
			email: user.email,
			name: user.name,
		};
		// Return success message or token for authentication
		res.status(200).json(userDataToSend);
	} catch (error) {
		console.error("Error in login:", error);
		res.status(500).json({ message: "Internal server error" });
	}
});

module.exports = { SignUp, Login };
