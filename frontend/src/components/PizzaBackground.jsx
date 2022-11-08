import React from 'react';

const PizzaBackground = () => {

    const imageBack = [
        <img src="/images/pizzaback.png" alt="backPizza" key="1"/>,
        <img src="/images/pizzaback.png" alt="backPizza" key="2"/>,
        <img src="/images/pizzaback.png" alt="backPizza" key="3"/>,
        <img src="/images/pizzaback.png" alt="backPizza" key="4"/>
    ]

    return (
        <div>
            <div className="pizzaBackground">
                <div className="leftSide">
                    {imageBack.map((i) => i)}
                </div>
                <div className="rightSide">
                    {imageBack.map((i) => i)}
                </div>
            </div>
        </div>
    );
};

export default PizzaBackground;