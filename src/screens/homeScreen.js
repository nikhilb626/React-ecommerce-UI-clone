import React from 'react';
import ProductScreen from './productScreen';
import Products from '../data';


const HomeScreen = () => {
    return (
        <div className="homie">
        <div className="products_cont">
        {
            Products.map((product=>{
                return (
                    <div key={product._id} >
                    <ProductScreen product={product} />
                    </div>
                )
            }))
        }
       

        </div>
        </div>
    )
}

export default HomeScreen;
