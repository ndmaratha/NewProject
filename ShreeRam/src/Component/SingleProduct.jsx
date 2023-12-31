import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useMenuApi from "../CustomHook/useMenuApi";
const SingleProduct=()=>{
  const {id}=useParams();
  const{loading,MenuData}=useMenuApi(id);
    return loading? (<Shimmer/>):(
        <>
       
          <div className="SingleCard">
          <div className="imgCont">  
          <img className="SingleImg" src={MenuData?.thumbnail} alt="Image" />
          <img className="SingleImg" src={`https://i.dummyjson.com/data/products/${id}/2.jpg`} alt="Image" />
          <img className="SingleImg" src={`https://i.dummyjson.com/data/products/${id}/3.jpg`} alt="Image" />
         
          
          </div>
          <div className="SingleTitle">{MenuData?.title}</div>
          <div className="SingleDesc">{MenuData?.description}</div>
          <div className="SingleRating">{MenuData?.rating}Star</div>
          <div className="SinglePrice">{MenuData?.price}$</div>
         <div className="SingleBtn">
         <button className="addtoCart">Add to Cart</button>
          <button className="buyNow">Buy Now</button>
         </div>
        </div>
         
        </>
    );
}
export default SingleProduct;