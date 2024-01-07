import ProductCart from "./ProductCart";
import { Link } from "react-router-dom";

const ProductList = ({ productList }) => {
	return productList.MainData.length === 0 ? (
		<div className="container mx-auto text-center mt-8">
			<p className="text-2xl font-bold text-gray-600">Product Not Found</p>
			<p className="text-gray-500">
				Sorry, the product you are looking for is not available.
			</p>
		</div>
	) : (
		<div className="m-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
			{productList.MainData.map((item) => (
				<Link
					to={"/product/" + item._id}
					key={item._id}
					className="hover:shadow-xl"
				>
					<ProductCart data={item} />
				</Link>
			))}
		</div>
	);
};
export default ProductList;
