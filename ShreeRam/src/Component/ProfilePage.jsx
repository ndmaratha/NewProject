import React, { useEffect } from "react";
import { Typography, Container, Grid, Paper, Avatar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
	const user = useSelector((store) => store.profile.data);
	const isLoggedIn = useSelector((store) => store.login.isLoggedIn);
	const navigate = useNavigate();

	useEffect(() => {
		console.log(user);
		if (!isLoggedIn) {
			navigate("/login", { replace: true });
		}
	}, [isLoggedIn, navigate, user]);

	return (
		<Container>
			<Grid container spacing={3} justifyContent="center">
				<Grid item xs={12} md={6}>
					<Paper elevation={3} className="p-4">
						<div className="flex items-center justify-center mb-4">
							<Avatar
								sx={{ width: 80, height: 80, backgroundColor: "primary.main" }}
							>
								<AccountCircleIcon sx={{ width: 60, height: 60 }} />
							</Avatar>
						</div>
						<Typography
							variant="h4"
							gutterBottom
							className="text-center text-2xl font-bold mb-4"
						>
							Profile
						</Typography>
						<div className="flex flex-col space-y-2">
							<Typography variant="body1" gutterBottom>
								<span className="font-bold">Name:</span> {user.name}
							</Typography>
							<Typography variant="body1" gutterBottom>
								<span className="font-bold">Username:</span> {user.username}
							</Typography>
							<Typography variant="body1" gutterBottom>
								<span className="font-bold">Email:</span> {user.email}
							</Typography>
							{/* Add other fields here */}
						</div>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};

export default ProfilePage;
