import useMainApi from "../CustomHook/useMainApi";
import { useState } from "react";
import Shimmer from "./Shimmer";
import ProductCart from "./ProductCart";
import { Link } from "react-router-dom";
const Body = () => {
	const { loading, MainData } = useMainApi();

	return loading ? (
		<Shimmer />
	) : (
		<div className="bodycard">
			{MainData.map((item) => {
                    
                    return <Link to={"/product/"+item.id} key={item.id} ><ProductCart  data={item} loading={loading}/></Link>;
			})}
		</div>
	);
};
export default Body;
