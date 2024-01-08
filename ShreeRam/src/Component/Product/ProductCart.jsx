
import { truncateDescription } from "../../utils/helper";
import RatingComp from "./RatingComp";
const ProductCard = ({ data }) => {


	return (
		<>
			<div className="ProductCard p-4 border border-gray-300 rounded-md">
				<img
					className="img w-full h-40 object-cover rounded-md mb-4"
					src={data?.thumbnail}
					alt="Image"
				/>
				<div className="title text-lg font-semibold mb-2">{data?.title}</div>
				<div className="desc text-gray-600 mb-2">
					{truncateDescription(data?.description, 100)}
				</div>
			<RatingComp data={data}/>
				<div className="price text-xl font-bold mb-2">${data?.price}</div>
			</div>
		</>
	);
};

export default ProductCard;
