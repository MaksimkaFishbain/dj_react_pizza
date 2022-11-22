import React, {useState} from 'react';
import Modal from "./Modal";


const Card = ({image, title, price, modalContent}) => {

    const [isOpened, setIsOpened] = useState(false);

    return (
        <div className="card">
            <img className="info" src="/images/info.png" alt="info" onClick={() => setIsOpened(true)}/>
            <img src= {image} alt="pizza" />
            <div className="aboutPizza">
                <h1>{title}</h1>
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
                    <h2>{price} BYN</h2>
                    <button>+</button>
                </div>
            </div>
            {isOpened && <Modal isOpened={isOpened} setIsOpened={setIsOpened} modalContent={modalContent}/>}
        </div>
    );
};

export default Card;