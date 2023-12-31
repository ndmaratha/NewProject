import useMainApi from "../CustomHook/useMainApi";
import { useState } from "react";
import Shimmer from "./Shimmer";
import ProductCart from "./ProductCart";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
const Body = () => {
	const productList=useMainApi();
	return productList.loading ? (
		<Shimmer />
	) : (
		
		<div className="bodycard">
			<SearchBar productList={productList}/>
			<div className="productlist">
				{productList.MainData.map((item) => {
					return (
						<Link to={"/product/" + item.id} key={item.id}>
							<ProductCart data={item} loading={productList.loading} />
						</Link>
					);
				})}
			</div>
		</div>
	);
};
export default Body;
