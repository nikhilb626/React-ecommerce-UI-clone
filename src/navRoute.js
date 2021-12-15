import React from 'react';
import HomeScreen from './screens/homeScreen';
import ProductDetail from './screens/productDetail';
import {Routes,Route} from "react-router-dom";
import CartScreen from './screens/cartScreen';

const NavRoute = () => {
    return (
        <>
        <Routes>
            <Route path="/" exact element={<HomeScreen />} />
            <Route path="/productdetail/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartScreen />} />
        </Routes>
            
        </>
    )
}

export default NavRoute;
