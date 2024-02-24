import React from "react";
import { Box } from "@mui/material";

const Footer = () => {
	return (
		<Box
			component="footer"
			className="bg-gray-800 text-white p-4"
			sx={{ marginTop: "auto", textAlign: "center" }}
		>
			<div className="container mx-auto">
				<p className="text-sm">&copy; 2024 Shree Ram. All rights reserved.</p>
			</div>
		</Box>
	);
};

export default Footer;
