import { useState } from "react";
import { filterData } from "../utils/helper";
import useMainApi from "../CustomHook/useMainApi";
const SearchBar = ({ productList }) => {
	const [search, setSearch] = useState("");
	const { MainData } = useMainApi();

	return (
		<div className="flex items-center mb-4">
			<input
				className="border border-gray-300 px-4 py-2 rounded-l-md focus:outline-none focus:border-blue-500"
				type="text"
				value={search}
				placeholder="Search"
				onChange={(e) => {
					setSearch(e.target.value);
				}}
			/>
			<button
				className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none"
				onClick={() => {
					const data = filterData(search, MainData);

					productList.setMainData(data);
				}}
			>
				Search
			</button>
		</div>
	);
};
export default SearchBar;
