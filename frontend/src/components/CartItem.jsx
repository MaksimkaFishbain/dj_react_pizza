import React from 'react';

const CartItem = ({...cartItem}) => {
    console.log(cartItem)
    return (
        <div className={"cartItem"}>
            <img src={"/media/cancel.png"} className={"cartItem--remove"}/>
            <img className={"pizza"} src={'/media/'+cartItem.img}/>
            <div className="cartItem--content">
                <h3>{cartItem.title}</h3>
                <h4>{cartItem.price} руб.</h4>
            </div>
        </div>
    );
};

export default CartItem;