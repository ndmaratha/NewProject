import { useEffect, useState } from "react";

const useMenuApi = (id) => {
	const [MenuData, setMenuData] = useState([]);
	const [loading, setLoading] = useState(false);
	const fetctMainData = async () => {
		setLoading(true);
		const res = await fetch(`https://dummyjson.com/products/${id}`);
		const data = await res.json();

		setMenuData(data);
		setLoading(false);
	};
	useEffect(() => {
		fetctMainData();
	}, [id]);

	return { loading, MenuData };
};
export default useMenuApi;
