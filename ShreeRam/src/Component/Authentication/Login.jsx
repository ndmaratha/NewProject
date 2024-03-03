import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { login, logout } from "../../Redux/LoginState";
import { createProfile } from "../../Redux/ProfileSlice";

const Login = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				import.meta.env.VITE_BACKEND_URL + "/login",
				formData
			);
			console.log(response.data);
			const authToken = response.data.token;

			localStorage.setItem("token", authToken);
			dispatch(login());
			dispatch(createProfile(response.data));
			navigate("/");
		} catch (error) {
			console.error("Login Error:", error);
		}
	};

	return (
		<Container maxWidth="sm">
			<Typography variant="h4" align="center" gutterBottom>
				Login
			</Typography>
			<form onSubmit={handleSubmit} className="space-y-4">
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
					Login
				</Button>
			</form>
			<Typography variant="body1" align="center" gutterBottom>
				Don't have an account? <Link to="/signup">Signup</Link>
			</Typography>
		</Container>
	);
};

export default Login;
