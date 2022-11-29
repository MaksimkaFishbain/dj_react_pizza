import "./styles.scss"
import Header from "./components/Header";
import Sorting from "./components/Sorting";
import Card from "./components/Card";
import React, {useState} from "react";
import Cart from "./components/Cart";

function App() {

  // type: 1 - мясная, 2 - вегетарианиская

  let data = require('./infoCard.json');

  const [isRender, setIsRender] = useState(data)
  const [fillerValue, setFillerValue] = useState(2)
  const [value, setValue] = useState('')
  const [cartOpened, setCartOpened] = useState(false)

  const filterByTitle = data.filter(item => {
    return value.length>0 && item.title.toLowerCase().includes(value.toLowerCase())
  })

  let filterByFiller = (fillerValue) => {
    return fillerValue === 2 ? data : data.filter((item) => {
      return item.isMeat === fillerValue
    })
  }

  let sortByField = (field) => {
    return field === 'popularity' ? filterByFiller(fillerValue).sort((a, b) => a[field] < b[field] ? 1 : -1) :
        filterByFiller(fillerValue).sort((a, b) => a[field] < b[field] ? -1 : 1)
  }

  return (
      <div className="App">
        {cartOpened && <Cart cartOpened={cartOpened} setCartOpened={id => setCartOpened(id)} />}
        <div className="wrapper">
          <Header
              setValue={id => setValue(id)}
              filterByTitle={filterByTitle}
              setIsRender={item => setIsRender(item)}
              setCartOpened={i => setCartOpened(i)}
              cartOpened={cartOpened}
          />
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
          <div className="menu">
            {isRender.map(({...item}, index) =>
                <Card
                    key={index}
                    {...item}
                />
            )}
          </div>
        </div>
      </div>
  );
}

export default App;


