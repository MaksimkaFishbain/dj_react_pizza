import React from 'react';
import CartItem from "./CartItem";

const Cart = ({cartOpened, setCartOpened, cartContent, setCartContent, cost}) => {
    console.log('cartContent', cartContent)
    return (
        <div className={cartOpened ? "cart" : "cart.active"} onClick={() => setCartOpened(false)}>
            <div className={cartOpened ? "cart__content" : "cart.active"} onClick={e => e.stopPropagation()}>
                <div className="cartHeader">
                    <h1>Корзина</h1>
                    <img src={"/media/cancel.png"} alt={"close cart"} onClick={() => setCartOpened(false)}/>
                </div>
                <div className="cartItems">
                    {cartContent.map((cartItem, index) =>
                        <CartItem
                            key={index}
                            cartContent={cartContent}
                            setCartContent={setCartContent}
                            {...cartItem}
                        />
                    )}
                </div>
                <div className="orderButton">
                    <p>Оформить заказ на <marker>{cost}</marker> руб.</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;