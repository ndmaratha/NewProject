import Logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";

const Header = () => {
	return (
		<div className="header">
			<Link  to={"/"}>
				<img className="logo" src={Logo} alt="logo" />
			</Link>
			<div className="ullist">
				<Link className="linkclass" to={"/about"}>About Us</Link>
				<Link className="linkclass" to={"/Contact"}>Contact Us</Link>
			</div>
		
			<div className="btn">
				<FaCartPlus className="cart" />
				<IoMdLogIn  className="login"/>
			</div>
		</div>
	);
};
export default Header;
