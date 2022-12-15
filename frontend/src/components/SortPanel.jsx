import React from 'react';
import Scroll from "./UI/Scroll";

const SortPanel = ({setIsRender, sortByField, setFillerValue, filterByFiller}) => {
    const [rangeValue, setRangeValue] = React.useState([10, 100]);

    return (
        <section className="sortPanel">
            <ol>
                <li onClick={() => {
                    setIsRender(filterByFiller(1))
                    setFillerValue(1)
                }}>Мясные</li>
                <li onClick={() => {
                    setIsRender(filterByFiller(0))
                    setFillerValue(0)
                }}>Вегетарианские</li>
                <li onClick={() => {
                    setIsRender(filterByFiller(2))
                    setFillerValue(2)
                }}>Все</li>
            </ol>
            <ol>
                <Scroll
                    setIsRender={setIsRender}
                    rangeValue={rangeValue}
                    setRangeValue={i => setRangeValue(i)}
                    sortByField={sortByField}
                />
                <div className={"reset-btn"} onClick={() => {
                    setRangeValue([10,100]);
                    setIsRender(sortByField())
                }}>
                    <h4>Сбросить настройки</h4>
                </div>
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