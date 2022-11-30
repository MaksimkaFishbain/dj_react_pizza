import React from 'react';
import CartItem from "./CartItem";

const Cart = ({cartOpened, setCartOpened, cartContent}) => {
    console.log('cartContent', cartContent)
    return (
        <div className={cartOpened ? "cart" : "cart.active"} onClick={() => setCartOpened(false)}>
            <div className={cartOpened ? "cart__content" : "cart.active"} onClick={e => e.stopPropagation()}>
                <div className="cartHeader">
                    <h1>Корзина</h1>
                    <img src={"/media/images/frontend/public/images/сancel.png"} onClick={() => setCartOpened(false)}/>
                </div>
                {cartContent.map((cartItem) =>
                    <CartItem
                        {...cartItem}
                    />
                )}
            </div>
        </div>
    );
};

export default Cart;