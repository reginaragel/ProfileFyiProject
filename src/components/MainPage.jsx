import React, { useState } from "react";
import { assets } from "./assets/image";
import './MainPage.css';
import { productData } from "./products";
import Header from "./Header";
import { Link, Navigate } from "react-router-dom";
const MainPage=()=>{

    const [isOpen,setIsOpen]=useState(false);
    const [redirect,setRedirect]=useState(false);
    const [selectedProduct,setSelectedProduct]=useState(null);

    const handleClick=(section)=>{
        setIsOpen(isOpen===section?null:section);
    }
    const handleGrid=(product)=>{
        setSelectedProduct(product);
        setRedirect(true)
    }
    if(redirect){
        return <Navigate to="/cart" state={{product:selectedProduct}}/>
    }
    return(
        <div>
            
            <Header/>
            <div className="sidebar">
                    <div className="filter">
                        <span>Filters</span>
                        <span className="span2">CLEAR ALL</span>
                        <div className="category">
                            <div className="brand">
                                <div className="brands">BRAND</div>
                                <img src={assets.down_icon} alt="brand" onClick={()=>handleClick('brand')}
                                 className={isOpen=== 'brand'?"rotate" : ""}/>
                            </div>
                            {isOpen ==='brand' && (   <div className="elements">
                                   <label><input type="checkbox"/>Boat</label><br/>
                                   <label><input type="checkbox"/>Apple</label><br/>
                                   <label><input type="checkbox"/>Realme</label><br/>
                                   <label><input type="checkbox"/>Samsung</label><br/>
                                   <label><input type="checkbox"/>Noise</label><br/>
                                   <label><input type="checkbox"/>Fasttrack</label><br/>
                                </div>)}
                            <div className="brand">
                                <div className="brands">DIAL SHAPE</div>
                                <img src={assets.down_icon} alt="brand"
                                onClick={()=>handleClick('dial shape')} className={isOpen ==='dial shape'? "rotate" : ""}/>
                            </div>
                            {isOpen ==='dial shape' && (   <div className="elements">
                                   <label><input type="checkbox"/>Contemporary</label><br/>
                                   <label><input type="checkbox"/>Curved</label><br/>
                                   <label><input type="checkbox"/>Oval</label><br/>
                                   <label><input type="checkbox"/>Rectangle</label><br/>
                                   <label><input type="checkbox"/>Round</label><br/>
                                   <label><input type="checkbox"/>Square</label><br/>
                                </div>)}
                            <div className="brand">
                                <div className="brands">DISPLAY SIZE</div>
                                <img src={assets.down_icon} alt="brand" onClick={()=>handleClick('display size')}
                                className={isOpen==='display size'?"rotate":""}/>
                            </div>
                            {isOpen ==='display size' && (   <div className="elements">
                                   <label><input type="checkbox"/>30.49 mm to 33.02 mm</label><br/>
                                   <label><input type="checkbox"/>33.03 mm to 35.56 mm</label><br/>
                                   <label><input type="checkbox"/>35.57 mm to 38.10 mm</label><br/>
                                   <label><input type="checkbox"/>38.11 mm to 40.64 mm</label><br/>
                                   <label><input type="checkbox"/>40.65 mm to 43.18 mm</label><br/>
                                   <label><input type="checkbox"/>Above 45.28 mm</label><br/>
                                   <label><input type="checkbox"/>Below 30.48 mm</label><br/>
                                </div>)}
                            <div className="brand">
                                <div className="brands">DISCOUNT</div>
                                <img src={assets.down_icon} alt="brand" onClick={()=>handleClick('discount')}
                                className={isOpen==='discount'?"rotate":""}/>
                            </div>
                            {isOpen ==='discount' && (   <div className="elements">
                                   <label><input type="checkbox"/>30% or more</label><br/>
                                   <label><input type="checkbox"/>40% or more</label><br/>
                                   <label><input type="checkbox"/>20% or more</label><br/>
                                   <label><input type="checkbox"/>10% or more</label><br/>
                                   <label><input type="checkbox"/>10% and below</label><br/>
                                </div>)}
                            <div className="brand">
                                <div className="brands">CUSTOMER RATINGS</div>
                                <img src={assets.down_icon} alt="brand" onClick={()=>handleClick('rating')}
                                className={isOpen==='rating'?"rotate":""}/>
                            </div>
                            {isOpen ==='rating' && (   <div className="elements">
                                   <label><input type="checkbox"/>4* & above</label><br/>
                                   <label><input type="checkbox"/>3* & above</label><br/>
                                   <label><input type="checkbox"/>2* & above</label><br/>
                                   <label><input type="checkbox"/>1* & more</label><br/>
                                </div>)}
                        </div>
                    </div>
                </div>
                <div className="main-content">
                   {productData.map(product=>(
                    <div className="grids" key={product.id} onClick={()=>handleGrid(product)}>
                        <div className="grid-img">
                           <img src={product.image} alt="mobile"/>
                        </div>
                        <div className="details">
                        <p>{product.title}</p>
                        <h3>{`₹${product.price}`}</h3>
                        </div>
                    </div>))}
                </div>

        </div>
    )
}
export default MainPage