import Logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';

import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCartData } from "../../Redux/CartSlice";

import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  const items = useSelector(store => store.cart.items);
  const dispatch = useDispatch();
    useEffect(() => {
      const fetchCart = async () => {
        try {
          // Assuming fetchCartData is an asynchronous action
          await dispatch(fetchCartData());
       
        } catch (error) {
          // Handle errors if necessary
          console.error("Error fetching cart data:", error);
        }
      };
  
      fetchCart();
    }, [items]);
  return (
    <div className="container mx-auto flex flex-wrap items-center justify-between p-2 border-black rounded-xl border-2 border-solid">
      <Link className="flex-shrink-0" to={"/"}>
        <img className="h-20 w-20 rounded-full" src={Logo} alt="logo" data-testid="logo" />
      </Link>
      <div className="flex space-x-4">
        <Link className="text-gray-800 hover:text-gray-600 text-lg rounded font-bold" to={"/about"}>
          About Us
        </Link>
        <Link className="text-gray-800 hover:text-gray-600 text-lg rounded font-bold" to={"/Contact"}>
          Contact Us
        </Link>
      </div>

      {/* Menu button for small screens */}
      <div className="flex items-center space-x-4 md:hidden">
        <Link  data-testid="cart" to={"/cart"}>
        <Badge badgeContent={items.length} color="primary">
      <ShoppingCartIcon />
    </Badge>
        </Link>
        <Link className="text-gray-800 hover:text-gray-600 text-lg rounded font-bold" to={"/login"}>
        <LoginIcon className="text-gray-800 text-xl rounded" />
        </Link>
      </div>

      {/* Mobile menu */}
      <div className="hidden md:flex items-center space-x-4">
        <Link className="text-gray-800 hover:text-gray-600 text-lg rounded font-bold" data-testid="cart" to={"/cart"}>
        <Badge badgeContent={items.length} color="primary">
      <ShoppingCartIcon />
    </Badge>
        </Link>
        <Link className="text-gray-800 hover:text-gray-600 text-lg rounded font-bold" to={"/login"}>
          <LoginIcon className="text-gray-800 text-xl rounded" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
