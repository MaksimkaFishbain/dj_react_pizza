import React from 'react';

const Sorting = ({isFilled, setIsFilled}) => {

    return (
        <div className="sortings">
            <ol id="left">
                <li padding-right="300px" onClick={() => setIsFilled(1)}>Мясные</li>
                <li padding-right="400px" onClick={() => setIsFilled(0)}>Вегетарианские</li>
                <li padding-right="200px" onClick={() => setIsFilled(2)}>Все</li>
            </ol>
            <ol id="center">
                <li>От <input/> руб.</li>
                <li>До <input /> руб.</li>
            </ol>
            <ol id="right">
                <p>Сортировать по:</p>
                <li><button>Популярности</button></li>
                <li><button>Цене</button></li>
                <li><button>Алфавиту</button></li>
            </ol>
        </div>
    );
};

export default Sorting;