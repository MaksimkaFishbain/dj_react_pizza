import React, {useState} from 'react';
import Modal from "./Modal";
import CartItem from "./CartItem";


const Card = ({cartContent, setCartContent, ...items}) => {

    const [isOpened, setIsOpened] = useState(false);

    return (
        <div className="card">
            <img className="info" src="/media/images/frontend/public/images/info.png" alt="info" onClick={() => setIsOpened(true)}/>
            <img src= {items.image} alt="pizza" />
            <div className="aboutPizza">
                <h1>{items.title}</h1>
                <div className="cardContent">
                    <form className="first">
                        <button>20 см</button>
                        <button>25 см</button>
                        <button>30 см</button>
                    </form>
                    <form className="second">
                        <button>Толстое тесто</button>
                        <button>Тонкое тесто</button>
                    </form>
                </div>
                <div className="lowerCard">
                    <h2>{items.price} BYN</h2>
                    <button onClick={() => {setCartContent([...cartContent, {img: items.image, price: items.price, title: items.title}]); console.log(cartContent)}}>+</button>
                </div>
            </div>
            {isOpened && <Modal isOpened={isOpened} setIsOpened={setIsOpened} modalContent={items.modalContent}/>}
        </div>
    );
};

export default Card;