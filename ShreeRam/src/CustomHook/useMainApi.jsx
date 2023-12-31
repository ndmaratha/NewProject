import { useEffect, useState } from "react";

const useMainApi = () => {
	const [MainData, setMainData] = useState([]);
	const [loading, setLoading] = useState(false);
	const fetctMainData = async () => {
		setLoading(true);
		const res = await fetch("https://dummyjson.com/products");
		const data = await res.json();
		
		setMainData(data.products);
		setLoading(false);
	};
	useEffect(() => {
		fetctMainData();
	}, []);

	return {loading, MainData,setMainData };
};
export default useMainApi;
