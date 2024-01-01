import Logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";

const Header = () => {
	return (
		<>
<div className="container mx-auto  flex items-center justify-between p-2 border-black rounded-xl border-2 border-solid">
  <Link className="flex-shrink-0" to={"/"}>
    <img className="h-20 w-20 rounded-full" src={Logo} alt="logo" />
  </Link>
  <div className="flex space-x-4">
    <Link className="text-gray-800 hover:text-gray-600 text-lg rounded font-bold" to={"/about"}>About Us</Link>
    <Link className="text-gray-800 hover:text-gray-600 text-lg rounded font-bold" to={"/Contact"}>Contact Us</Link>
  </div>
  <div className="flex items-center space-x-4">
    <FaCartPlus className="text-gray-800 text-xl rounded" />
    <IoMdLogIn className="text-gray-800 text-xl rounded" />
  </div>
</div>



		</>
	);
};
export default Header;
