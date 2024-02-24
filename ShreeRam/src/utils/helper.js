export const singleProductUrl = `${import.meta.env.VITE_BACKEND_URL}/product/`;
export const mainUrl = `${import.meta.env.VITE_BACKEND_URL}/get/products`;
export const filterData = (search, MainData) => {
	return MainData.filter((item) => {
		if (search === "" || search == null) {
			return item;
		} else {
			return item?.title?.toLowerCase().includes(search.toLowerCase());
		}
	});
};

export const filterCategory = (search, MainData) => {
	return MainData.filter((item) => {
		if (search === "" || search == null) {
			return item;
		} else {
			return item?.category?.toLowerCase().includes(search.toLowerCase());
		}
	});
};

export function truncateDescription(description, maxLength) {
	if (description.length > maxLength) {
		return description.substring(0, maxLength) + "...";
	}
	return description;
}
