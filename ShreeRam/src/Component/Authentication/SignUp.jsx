// Signup.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Container } from "@mui/material";

const Signup = () => {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
		name: "",
	});
	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				import.meta.env.VITE_BACKEND_URL + "/signup",
				formData
			);
			console.log(response.data);
			navigate("/login", { replace: true });
		} catch (error) {
			console.error("Signup Error:", error.response.data.message);
		}
	};
	useEffect(() => {
		const apikey = import.meta.env.VITE_BACKEND_URL;
		console.log({ apikey });
	}, []);
	return (
		<Container maxWidth="sm">
			<Typography variant="h4" align="center" gutterBottom>
				Signup
			</Typography>
			<form onSubmit={handleSubmit} className="space-y-4">
				<TextField
					fullWidth
					label="Username"
					name="username"
					value={formData.username}
					onChange={handleChange}
					required
					variant="outlined"
					margin="normal"
				/>
				<TextField
					fullWidth
					label="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
					variant="outlined"
					margin="normal"
				/>
				<TextField
					fullWidth
					label="Email"
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
					variant="outlined"
					margin="normal"
				/>
				<TextField
					fullWidth
					label="Password"
					type="password"
					name="password"
					value={formData.password}
					onChange={handleChange}
					required
					variant="outlined"
					margin="normal"
				/>
				<Button type="submit" variant="contained" color="primary" fullWidth>
					Signup
				</Button>
			</form>
			<Typography variant="body1" align="center" gutterBottom>
				Already have an account? <Link to="/login">Login</Link>
			</Typography>
		</Container>
	);
};

export default Signup;
