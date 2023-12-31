import { useState } from "react";
import { filterData } from "../utils/helper";
import useMainApi from "../CustomHook/useMainApi";
const SearchBar=({productList})=>{
    const [search, setSearch] = useState("");
    const {  MainData } = useMainApi();

return(
    <div>
				<input
					type="text"
					value={search}
					placeholder="search"
					onChange={(e) => {
						setSearch(e.target.value);
					}}
				/>
				<button
					onClick={() => {
						const data = filterData(search, MainData);
						productList.setMainData(data);
					}}
				>
					search
				</button>
			</div>
)

}
export default SearchBar;