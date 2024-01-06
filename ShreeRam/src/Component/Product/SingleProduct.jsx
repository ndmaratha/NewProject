import { useNavigate, useParams } from "react-router-dom";
import Shimmer from "../Shimmer";
import { addItemToCart } from "/src/Redux/CartSlice";
import useMenuApi from "../../CustomHook/useMenuApi";
import useMainApi from "../../CustomHook/useMainApi";
import { filterCategory } from "../../utils/helper";
import ProductList from "./ProductList";
import {  useState } from "react";
import { useDispatch } from "react-redux";
const SingleProduct = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const { loading, MenuData } = useMenuApi(id);
	const productList = useMainApi();
	const { MainData } = useMainApi();
	const [showMore, setShowMore] = useState(false);
	const dispatch = useDispatch();
	return loading ? (
		<Shimmer />
	) : (
		<>
			<div className=" bg-white p-8 rounded-md shadow-lg max-w-3xl mx-auto mt-8">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div>
						<img
							className="w-full h-auto object-cover rounded-md mb-6"
							src={MenuData?.thumbnail}
							alt="Product"
						/>
					</div>

					<div>
						<div className="text-3xl font-semibold mb-4">{MenuData?.title}</div>
						<div className="text-gray-700 text-lg mb-4">
							{MenuData?.description}
						</div>
						<div className="flex items-center mb-4">
							<div className="text-xl font-bold text-yellow-500 mr-2">
								{MenuData?.rating} Star
							</div>
							<div className="text-2xl font-bold">${MenuData?.price}</div>
						</div>
						<div className="mb-4">
							<div className="text-gray-600 mb-2">
								Available to ship in 1-2 days.
							</div>
							<div className="text-gray-600">
								Ships from and sold by Your Store.
							</div>
						</div>
						<div className="flex space-x-4">
							<button
								className="px-6 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none"
								onClick={() => dispatch(addItemToCart(MenuData))}
							>
								Add to Cart
							</button>
							<button
								onClick={() => navigate("/checkout")}
								className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
							>
								Buy Now
							</button>
						</div>
					</div>
				</div>
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					onClick={() => {
						const data = filterCategory(MenuData?.category, MainData);
						productList.setMainData(data);
						setShowMore(true);
					}}
				>
					Show Related Products
				</button>
			</div>
			{showMore ? <ProductList productList={productList} /> : <></>}
		</>
	);
};

export default SingleProduct;
