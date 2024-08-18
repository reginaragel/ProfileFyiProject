import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import './CartPage.css';
import Header from "./Header";
import { assets } from "./assets/image";

const CartPage = () => {
    const location = useLocation();
    const product = location.state?.product;
    const [cartItems, setCartItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleCart = () => {
        const existingProduct = cartItems.find(item => item.id === product.id);
        if (existingProduct) {
            setCartItems(cartItems.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
            ));
        } else {
            setCartItems([...cartItems, { ...product, quantity }]);
        }
        setIsOpen(false);
    };

    const calculateTotal = () => {
        return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };

    const handleQuantity = (e) => {
        setQuantity(Number(e.target.value) || 1);
    };

    const removeItem = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    return (
        <>
            <Header />
            <div className="cartpage">
                {product ? (
                    <div className="cart-items">
                        <img src={product.image} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p>{`₹${product.price}`}</p>
                    </div>
                ) : (
                    <p>No product selected</p>
                )}
                <div className="buttons">
                    <div className="btn1">
                        <button onClick={() => setIsOpen(true)}>
                            <img src={assets.newcart_icon} alt="cart" />
                            Add to cart
                        </button>
                    </div>
                    <div className="btn2">
                        <button>Buy Now</button>
                    </div>
                    {isOpen && (
                        <div className="quantity">
                            <h3>Quantity
                                <input type="number" value={quantity} onChange={handleQuantity} min="1" />
                            </h3>
                            <div className="total">
                                <label>Total Amount: ₹{calculateTotal()}</label>
                            </div>
                            <button onClick={handleCart}>Confirm</button>
                        </div>
                    )}
                </div>
            </div>
            <div className="about">
                <div className="name">
                    {product.title}
                </div>
                <div className="price">
                    {`₹${product.price}`}
                </div>
                <div className="description">
                    {product.description}
                </div>
            </div>
            <div className="cart-summary">
                <h2>Cart Items</h2>
                {cartItems.length > 0 ? (
                    cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} />
                            <div className="item-details">
                                <h3>{item.title}</h3>
                                <p>₹{item.price} x {item.quantity}</p>
                                <button onClick={() => removeItem(item.id)}>Remove</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty</p>
                )}
                <div className="cart-total">
                    <h3>Total: ₹{calculateTotal()}</h3>
                </div>
            </div>
        </>
    );
};

export default CartPage;
