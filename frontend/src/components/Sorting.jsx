import React from 'react';

const Sorting = ({setIsRender, setFillerValue, sortByField, filterByFiller}) => {
    return (
        <div className="sorting">
            <ol id="left">
                <li padding-right="300px" onClick={() => {
                    setIsRender(filterByFiller(1))
                    setFillerValue(1)
                }}>Мясные
                </li>
                <li padding-right="400px" onClick={() => {
                    setIsRender(filterByFiller(0))
                    setFillerValue(0)
                }}>Вегетарианские
                </li>
                <li padding-right="200px" onClick={() => {
                    setIsRender(filterByFiller(2))
                    setFillerValue(2)
                }}>Все
                </li>
            </ol>
            <ol id="center">
                <h3>Ценовой диапазон</h3>
                <li><input type={"range"} min={"1"} max={"100"}/></li>
            </ol>
            <ol id="right">
                <p>Сортировать по:</p>
                <li>
                    <button onClick={() => {
                        setIsRender([...sortByField('popularity')])
                    }}>Популярности
                    </button>
                </li>
                <li>
                    <button onClick={() => {
                        setIsRender([...sortByField('price')])
                    }}>Цене (по возрастанию)
                    </button>
                </li>
                <li>
                    <button onClick={() => {
                        setIsRender([...sortByField('title')])
                    }}>Алфавиту
                    </button>
                </li>
            </ol>
        </div>
    );
};

export default Sorting;