import React from 'react';
import CartItem from "./CartItem";

const Cart = ({cartOpened, setCartOpened}) => {

    return (
        <div className={cartOpened ? "cart" : "cart.active"} onClick={() => setCartOpened(false)}>
            <div className={cartOpened ? "cart__content" : "cart.active"} onClick={e => e.stopPropagation()}>
                <div className="cartHeader">
                    <h1>Корзина</h1>
                    <img src={"./images/cancel.png"} onClick={() => setCartOpened(false)}/>
                </div>
                <CartItem />
            </div>
        </div>
    );
};

export default Cart;