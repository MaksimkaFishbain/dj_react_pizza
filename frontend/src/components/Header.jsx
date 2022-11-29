import React from 'react';

const Header = ({setValue, setIsRender, filterByTitle, setCartOpened, cartOpened}) => {

    return (
        <>
            <form className="header">
                <div className="logo">
                    <img src="/images/pizza.png" alt="logo"/>
                    <h4>Здесь может быть <br /> ваша реклама</h4>
                </div>
                <div className="search">
                    <img src="/images/search.png" />
                    <input type={"text"} placeholder="Поиск..." onChange={(e) => {
                        setValue(e.target.value)
                        setIsRender(filterByTitle)
                    }}/>
                </div>
                <div className="currentPayment">
                    <button id="fst">7000 BYN</button>
                    <button id="sec" onClick={(e) => {
                        e.preventDefault()
                        setCartOpened(true)
                    }}>Корзина</button>
                </div>
            </form>
        </>
    );
};

export default Header;