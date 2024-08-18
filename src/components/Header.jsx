import React from "react";
import { assets } from "./assets/image";
import CartPage from "./CartPage";

const Header=()=>{
    return(
        <div>
            <div className="top-level">
                <div className="logo">
                    <img src={assets.flip_icon} alt="Flipkart"/>
                </div>
                <div className="search-box">
                   <input type="text" placeholder="Search for Items....."/>
                   <img src={assets.search_icon} alt="search" className="search-icon"/>
                </div>
                <div className="login-box">
                    <span>Login</span>
                    <img src={assets.right_icon} alt="right"/>
                </div>
                <div className="seller">
                    <span>Become a seller</span>
                </div>
                <div className="more">
                    <span>More</span>
                    <img src={assets.right_icon} alt="right"/>
                </div>
                <div className="cart">
                    <img src={assets.newcart_icon} alt="Cart"/>
                </div> 

            </div>
            <div className="second-level">
                <div className="items-list">
                    <div className="mobile">
                        <img src={assets.mobile_icon} alt="mobile"/>
                        <span>Mobiles & Tablets</span>
                    </div>
                    <div className="home">
                        <img src={assets.home_icon} alt="home"/>
                        <span>TVs & Appliances</span>
                    </div>
                    <div className="fashion">
                        <img src={assets.fashion_icon} alt="fashion"/>
                        <span>Fashion</span>
                    </div>
                    <div className="electronics">
                        <img src={assets.laptop_icon} alt="laptop"/>
                        <span>Electronics</span>
                    </div>
                    <div className="beauty">
                        <img src={assets.beauty_icon} alt="beauty"/>
                        <span>Beauty</span>
                    </div>
                    <div className="decor">
                        <img src={assets.decor_icon} alt="decor"/>
                        <span>Home Decor</span>
                    </div>
                </div>
                
            </div>
            {/* <CartPage/> */}
        </div>
    )
}
export default Header