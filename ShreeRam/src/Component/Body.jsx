import useMainApi from "../CustomHook/useMainApi";
import { useState } from "react";
import Shimmer from "./Shimmer";
import ProductList from "./ProductList";
import SearchBar from "./SearchBar";
const Body = () => {
	const productList=useMainApi();
	return productList.loading ? (
		<Shimmer />
	) : (
		
		<div className=" p-4">
		<SearchBar productList={productList} />
		<ProductList productList={productList}/>
	  </div>
	  
	);
};
export default Body;
