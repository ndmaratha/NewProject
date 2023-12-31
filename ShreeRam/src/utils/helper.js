export const filterData=(search,MainData)=>{
 return MainData.filter((item) => {
    if (search === "" || search == null) {
      return item;
    } else {
      return item?.title?.toLowerCase().includes(search.toLowerCase());
    }
  });
 
}