
const ProductCart=({data})=>{
    return(
        <>
        <div className="ProductCard">
          <img className="img" src={data.thumbnail} alt="Image" />
          <div className="title">{data.title}</div>
          <div className="desc">{data.description}</div>
          <div className="rating">{data.rating}Star</div>
          <div className="price">{data.price}$</div>
        </div>
        </>
    )
}
export default ProductCart;