
const ProductCart=({data})=>{
    return(
        <>
        <div className="ProductCard">
          <img src={data.thumbnail} alt="Image" />
          <div>{data.title}</div>
          <div>{data.description}</div>
          <div>{data.rating}Star</div>
          <div>{data.price}$</div>
        </div>
        </>
    )
}
export default ProductCart;