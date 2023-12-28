import useMainApi from "../CustomHook/useMainApi";
import { useState } from "react";
import Shimmer from "./Shimmer";
import ProductCart from "./ProductCart";
const Body = () => {
	const { loading, MainData } = useMainApi();

	return loading ? (
		<Shimmer />
	) : (
		<div className="bodycard">
			{MainData.map((item) => {
                    
                    return <ProductCart key={item.id} data={item} />;
			})}
		</div>
	);
};
export default Body;
