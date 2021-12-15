import React from 'react';
import StarRatings from 'react-star-ratings';
import {Link} from "react-router-dom";

const ProductScreen = ({product}) => {
    return (
        <div className="card_container">
        <Link to={`/productdetail/${product._id}`}>
        <div className="photo_container">
    <img src={product.imgsrc} alt="photo" />
        </div>
        <div className="product_info">

        <div className="brand_name">{product.brand}</div>
        <div className="product_name">{product.name}</div>
        <div className="below_cont">
            <div className="price">$ {product.price}</div>
            <i class="fas fa-check-double"></i>
        </div>
        <StarRatings
          rating={product.rating}
          starRatedColor="orange"
          numberOfStars={5}
          name='rating'
          starDimension="1rem"
          starSpacing="1px"
        />
        </div>


        </Link>
        </div>
    )
}

export default ProductScreen;
