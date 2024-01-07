import { useEffect, useState } from "react";
import axios from "axios";
import { singleProductUrl } from "../utils/helper";
const useMenuApi = (id) => {
	const [MenuData, setMenuData] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetctMainData = async () => {
		setLoading(true);
		const response = await axios.post(
		singleProductUrl+id
		);

		setMenuData(response.data);
		setLoading(false);
	};

	useEffect(() => {
		fetctMainData();
	}, [id]);

	return { loading, MenuData };
};

export default useMenuApi;
