
import AddtoDb from "../../CustomHook/AddtoDb";

const Contact = () => {
	const {productData,handleFormSubmit,handleInputChange}=AddtoDb();

	return (
		<div className="max-w-md mx-auto mt-8 p-8 border rounded shadow-lg bg-white">
			<h2 className="text-2xl font-bold mb-4">Create Product</h2>
			<form onSubmit={handleFormSubmit}>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-semibold mb-2">
						Title:
					</label>
					<input
						className="w-full p-2 border rounded"
						type="text"
						name="title"
						value={productData.title}
						onChange={handleInputChange}
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-semibold mb-2">
						Description:
					</label>
					<input
						className="w-full p-2 border rounded"
						type="text"
						name="description"
						value={productData.description}
						onChange={handleInputChange}
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-semibold mb-2">
						Price:
					</label>
					<input
						className="w-full p-2 border rounded"
						type="number"
						name="price"
						value={productData.price}
						onChange={handleInputChange}
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-semibold mb-2">
						Rating:
					</label>
					<input
						className="w-full p-2 border rounded"
						type="number"
						name="rating"
						value={productData.rating}
						onChange={handleInputChange}
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-semibold mb-2">
						Brand:
					</label>
					<input
						className="w-full p-2 border rounded"
						type="text"
						name="brand"
						value={productData.brand}
						onChange={handleInputChange}
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-semibold mb-2">
						Category:
					</label>
					<input
						className="w-full p-2 border rounded"
						type="text"
						name="category"
						value={productData.category}
						onChange={handleInputChange}
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-semibold mb-2">
						Thumbnail:
					</label>
					<input
						className="w-full"
						type="text"
						name="thumbnail"
						value={productData.thumbnail}
						onChange={handleInputChange}
					/>
				</div>
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					type="submit"
				>
					Create Product
				</button>
			</form>
		</div>
	);
};

export default Contact;
