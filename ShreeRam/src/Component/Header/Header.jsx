import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartData } from "../../Redux/CartSlice";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import Logo from "../../assets/logo.jpg";
import {
	AppBar,
	Toolbar,
	IconButton,
	Menu,
	MenuItem,
	Typography,
} from "@mui/material";

const Header = () => {
	const items = useSelector((store) => store.cart.items);
	const isLoggedIn = useSelector((store) => store.login.isLoggedIn);
	const dispatch = useDispatch();

	const [anchorEl, setAnchorEl] = useState(null);

	const handleMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	// Fetch cart data on component mount
	useEffect(() => {
		const fetchCart = async () => {
			try {
				dispatch(fetchCartData());
			} catch (error) {
				console.error("Error fetching cart data:", error);
			}
		};

		fetchCart();
	}, [items]); // Dependency array should include dispatch only

	return (
		<AppBar position="static" color="transparent" elevation={0}>
			<Toolbar>
				<Link to={"/"}>
					<img
						className="h-12 lg:h-16 rounded-full"
						src={Logo}
						alt="logo"
						data-testid="logo"
					/>
				</Link>
				<div style={{ flex: 1 }} />
				<div>
					<IconButton color="inherit" component={Link} to={"/cart"}>
						<Badge badgeContent={items.length} color="primary">
							<ShoppingCartIcon />
						</Badge>
					</IconButton>
					<IconButton color="inherit" onClick={handleMenuOpen}>
						{isLoggedIn ? (
							<AccountCircleIcon />
						) : (
							<LoginIcon className="text-gray-800 text-xl rounded" />
						)}
					</IconButton>
					<Menu
						anchorEl={anchorEl}
						open={Boolean(anchorEl)}
						onClose={handleMenuClose}
					>
						{isLoggedIn ? (
							<div>
								<MenuItem
									onClick={handleMenuClose}
									component={Link}
									to={"/profile"}
								>
									Profile
								</MenuItem>
							</div>
						) : (
							<MenuItem
								onClick={handleMenuClose}
								component={Link}
								to={"/login"}
							>
								Login
							</MenuItem>
						)}
					</Menu>
				</div>
				<Link
					to={"/about"}
					className="text-black hover:text-gray-300 text-lg font-bold"
				>
					About
				</Link>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
