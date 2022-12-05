import React from 'react';
import Scroll from "./UI/Scroll";

const SortPanel = ({setIsRender, setFillerValue, sortByField, filterByFiller}) => {
    return (
        <section className="sortPanel">
            <ol>
                <li padding-right="300px" onClick={() => {
                    setIsRender(filterByFiller(1))
                    setFillerValue(1)
                }}>Мясные</li>
                <li padding-right="400px" onClick={() => {
                    setIsRender(filterByFiller(0))
                    setFillerValue(0)
                }}>Вегетарианские</li>
                <li padding-right="200px" onClick={() => {
                    setIsRender(filterByFiller(2))
                    setFillerValue(2)
                }}>Все</li>
            </ol>
            <ol>
                <Scroll />
            </ol>
            <ol>
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
        </section>
    );
};

export default SortPanel;