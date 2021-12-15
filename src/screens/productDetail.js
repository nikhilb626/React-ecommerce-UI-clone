import React,{useState} from 'react';
import Products from '../data';
import {useParams,useNavigate} from "react-router-dom";
import { useEffect } from 'react';
import StarRatings from 'react-star-ratings';



const ProductDetail = ({match}) => {

    const navigate=useNavigate();

    const {id}=useParams();

console.log("this is id- ",id);
    const product=Products.find((item)=>item._id==id);
    console.log("this is product ",product);


    const [qtyClass,setQtyClass]=useState("span2 stock")

    const getStockinfo=()=>{
        if(product.qty<1){
            setQtyClass("span2 outofstock")
        }
        else{
            setQtyClass("span2 stock")
        }
    }

    const handleBack=()=>{
        navigate("/");
    }


    useEffect(()=>{
        getStockinfo();
    },[])





    return (
        <>
    <div className="productDetail_container">
        <div className="backBtn" onClick={handleBack}><i class="fas fa-chevron-left"></i>Back to home</div>

        <div className="product_container">


            <div className="product_photo_container">
                <img src={product.imgsrc} alt="photo" />
            </div>


            <div className="description_container">
            <div className="prod_name">{product.name}</div>
                <div className="rating_container">
                <StarRatings
          rating={product.rating}
          starRatedColor="orange"
          numberOfStars={5}
          name='rating'
          starDimension="1rem"
          starSpacing="1px"
        />
                </div>
        <div className="price_container">price:${product.price}</div>
        <div className="description_main">
           <span>Description : </span>{product.description}
        </div>
            </div>


            <div className="cart_container">
                <div className="brand_cat_container crt"><span className="span1">category</span><span className="span2">{product.category}</span></div>
                <div className="brand_cat_container crt"><span className="span1">brand</span><span className="span2">{product.brand}</span></div>
                <div className="price2_container crt"><span className="span1">price</span><span className="span2">${product.price}</span></div>

                <div className="status crt"><span className="span1">status</span><span className={qtyClass}>{
                    product.qty>1?"in Stock":"out of Stock"
                }</span></div>
           
                <div className="quantity crt"><span className="span1">Qty</span><span className="span2"> options</span> </div>

                <div className="addBtn"><button>Add to Cart</button></div>

            </div>

        </div>
    </div>
        </>
    )
}

export default ProductDetail;
