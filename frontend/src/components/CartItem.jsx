import React from 'react';

const CartItem = () => {
    return (
        <div className={"cartItem"}>
            <img src={"./images/info.png"} className={"cartItem--remove"}/>
            <img className={"pizza"} src={"./images/pizzaSalami.png"}/>
            <div className="cartItem--content">
                <h3>Пепперонни</h3>
                <h4>12 руб.</h4>
            </div>
        </div>
    );
};

export default CartItem;