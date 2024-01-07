
export const singleProductUrl="http://localhost:3001/product/";
export const mainUrl="http://localhost:3001/get/products"
export const filterData=(search,MainData)=>{
 return MainData.filter((item) => {
    if (search === "" || search == null) {
      return item;
    } else {
      return item?.title?.toLowerCase().includes(search.toLowerCase());
    }
  });
 
}

export const filterCategory=(search,MainData)=>{
  return MainData.filter((item) => {
    if (search === "" || search == null) {
      return item;
    } else {
      return item?.category?.toLowerCase().includes(search.toLowerCase());
    }
  });
}