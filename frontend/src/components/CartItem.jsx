import React, {useRef} from 'react';

const CartItem = ({cartContent, setCartContent, ...cartItem}) => {
    const deleteItem = useRef(0)
    let deleteCartItem = () => {
        return cartContent.filter(cartItem => cartItem.id !== deleteItem.current)
    }

    return (
        <div className={"cartItem"}>
            <img src={"/media/сancel.png"} alt={"delete"} className={"cartItem--remove"} onClick={() => {
                deleteItem.current = cartItem.id
                console.log(deleteItem)
                setCartContent(deleteCartItem())
                console.log(cartContent)
            }}/>
            <img className={"pizza"} alt={"pizza"} src={'/media/'+cartItem.img}/>
            <div className="cartItem--content">
                <h3>{cartItem.title}</h3>
                <h4>{cartItem.price} руб.</h4>
            </div>
        </div>
    );
};

export default CartItem;