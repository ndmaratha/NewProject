import { useEffect, useState } from "react";
import axios from 'axios'
const useCart = () => {
	const [cartData, setCartData] = useState([]);
	const [loading, setLoading] = useState(false);
	const fetctMainData = async () => {
		setLoading(true);
		const res = await axios.get("http://localhost:3001/get/cart");
		setCartData(res.data);
		setLoading(false);
	};
	useEffect(() => {
		fetctMainData();
	}, []);

	return {loading, cartData,setCartData };
};
export default useCart;
