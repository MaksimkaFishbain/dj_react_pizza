import React from 'react';

const Header = ({setValue, setIsRender, filterByTitle, setCartOpened}) => {

    return (
        <>
            <form className="header">
                <div className="logo">
                    <img src="/media/images/frontend/public/images/logo.png" alt="logo"/>
                    <h1>Pizza iz zada</h1>
                </div>
                <div className="search">
                    <img src="/media/images/frontend/public/images/search.png" />
                    <input type={"text"} placeholder="Поиск..." onChange={(e) => {
                        setValue(e.target.value)
                        setIsRender(filterByTitle)
                    }}/>
                </div>
                <div className="currentPayment">
                    <div className="avatar"><img src="/media/avatar.png" alt="Профиль"/></div>
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