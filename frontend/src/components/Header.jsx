import React from 'react';

const Header = () => {
    return (
        <div>
            <form className="header">
                <div className="logo">
                    <img src="file:///C:/Users/bbadb/OneDrive/Desktop/django_react_integration-main/frontend/public/images/pizza.png" alt="logo"/>
                    <h1>Pizza iz zada</h1>
                </div>
                <div className="search">
                    <img src="file:///C:/Users/bbadb/OneDrive/Desktop/django_react_integration-main/frontend/public/images/search.png"  alt="search"/>
                    <input type={"text"} placeholder="Поиск..." />
                </div>
                <div className="currentPayment">
                    <button id="fst">7000 BYN</button>
                    <button id="sec">Корзина</button>
                </div>
            </form>
        </div>
    );
};

export default Header;