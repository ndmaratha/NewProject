
const ProductCart=({data})=>{
    return(
        <>
        <div className="ProductCard">
          <img className="img" src={data?.thumbnail} alt="Image" />
          <div className="title">{data?.title}</div>
          <div className="desc">{data?.description}</div>
          <div className="rating">{data?.rating}Star</div>
          <div className="price">{data?.price}$</div>
          <div className="productaddtocart">
          <button className="addtoCart">Add to Cart</button>
          </div>
        </div>
        </>
    )
}
export default ProductCart;