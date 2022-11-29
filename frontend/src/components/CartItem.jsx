import React from 'react';

const CartItem = () => {
    return (
        <div className={"cartItem"}>
            <img src={"/media/images/frontend/public/images/info.png"} className={"cartItem--remove"}/>
            <img className={"pizza"} src={"./media/images/frontend/public/images/pizzaPeperoni.png"}/>
            <div className="cartItem--content">
                <h3>Пепперонни</h3>
                <h4>12 руб.</h4>
            </div>
        </div>
    );
};

export default CartItem;