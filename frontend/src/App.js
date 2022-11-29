import "./styles.scss"
import Header from "./components/Header";
import Sorting from "./components/Sorting";
import Card from "./components/Card";
import React, {useState} from "react";
import Cart from "./components/Cart";

function App() {

  // type: 1 - мясная, 2 - вегетарианиская
  const data = [
    {
      title: "Пепперонни",
      image: "/images/pizzaPeperoni.png",
      price: 120,
      modalContent: "20 грамм картошки",
      isMeat: 1,
      popularity: 36,
    },
    {
      title: "Салями",
      image: "/images/pizzaSalami.png",
      price: 99,
      modalContent: "40 грамм мандавошки",
      isMeat: 1,
      popularity: 24,
    },
    {
      title: "Гавайская",
      image: "/images/pizzaGavaiskia.png",
      price: 81,
      modalContent: "15 мандаринок",
      isMeat: 1,
      popularity: 18,
    },
    {
      title: "Грибная",
      image: "/images/pizzaGribnaia.png",
      price: 144,
      modalContent: "90 ведер воды",
      isMeat: 0,
      popularity: 22,
    },
    {
      title: "4 сезона",
      image: "/images/pizzaFourSesons.png",
      price: 120,
      modalContent: "150 домов",
      isMeat: 0,
      popularity: 12,
    },
    {
      title: "Терияки",
      image: "/images/pizzaTeriyaki.png",
      price: 72,
      modalContent: "3 царства",
      isMeat: 1,
      popularity: 25,
    }
  ]

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
