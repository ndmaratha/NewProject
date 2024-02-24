import useMainApi from "../CustomHook/useMainApi";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import ProductList from "./Product/ProductList";
import SearchBar from "./SearchBar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Body = () => {
	const productList = useMainApi();
	const isLoggedIn = useSelector((store) => store.login.isLoggedIn);
	const navigate = useNavigate();
	useEffect(() => {
		if (!isLoggedIn) {
			navigate("/login", { replace: true });
		}
	}, []);
	return productList.loading ? (
		<Shimmer />
	) : (
		<div className=" p-4">
			<SearchBar productList={productList} />
			<ProductList productList={productList} />
		</div>
	);
};
export default Body;
