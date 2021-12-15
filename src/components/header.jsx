import React from 'react'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>
  <div className="navbar">
  <div className="nav_inner">
  <Link to="/" activeClassName="active" id="homeLink">Amazing</Link>

<input type="search" className="searcher" placeholder="search a product" />

<Link to="/cart" className="moreLink" >More<i class="fas fa-angle-down"></i></Link> 

<Link to="/cart" className="cartLink"><i class="fas fa-bell"></i></Link> 

<Link to="/cart" className="cartLink"><i class="fas fa-shopping-cart"></i></Link> 
  </div>

<input type="search" className="searcher2" placeholder="search a product" />
  
       
  </div>

  <div className="optionsBar">
      <ul>
          <li>Electronics<i class="fas fa-angle-down"></i></li>
          <li>Phones<i class="fas fa-angle-down"></i></li>
          <li>Men<i class="fas fa-angle-down"></i></li>
          <li>Women<i class="fas fa-angle-down"></i></li>
          <li>Sports<i class="fas fa-angle-down"></i></li>
          <li>Flights<i class="fas fa-angle-down"></i></li>
          <li>Offer zone<i class="fas fa-angle-down"></i></li>
      </ul>
  </div>
        </>
    )
}

export default Header;
