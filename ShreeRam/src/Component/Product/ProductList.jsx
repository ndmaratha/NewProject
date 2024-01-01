import ProductCart from "./ProductCart";
import { Link } from "react-router-dom";

const ProductList = ({ productList }) => {
	return (
		<div className="m-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
			{productList.MainData.map((item) => (
				<Link
					to={"/product/" + item.id}
					key={item.id}
					className="hover:shadow-xl"
				>
					<ProductCart data={item} loading={productList.loading} />
				</Link>
			))}
		</div>
	);
};
export default ProductList;
