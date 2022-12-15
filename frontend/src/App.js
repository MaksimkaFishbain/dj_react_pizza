import "./styles.scss"
import Header from "./components/Header";
import SortPanel from "./components/SortPanel";
import Card from "./components/Card";
import React, {useState, useRef} from "react";
import Cart from "./components/Cart";

function App() {

  // type: 1 - мясная, 2 - вегетарианиская

  let data = require('./infoCard.json');

  const [isRender, setIsRender] = useState(data)
  const [fillerValue, setFillerValue] = useState(2)
  const value = useRef('')
  const [cartOpened, setCartOpened] = useState(false)
  const [cartContent, setCartContent] = useState([])

  let cost = cartContent.reduce((sum, obj) => obj.price + sum, 0)

  const filterByTitle = () => data.filter(item => {
    return value.current.length===0 ? data : item.title.toLowerCase().includes(value.current.toLowerCase())
  })


  const filterByFiller = (fillerValue) => {
    return fillerValue === 2 ? filterByTitle() : filterByTitle().filter((item) => {
      return item.isMeat === fillerValue
    })
  }

  const sortByField = (field) => {
    return field === 'popularity' ? filterByFiller(fillerValue).sort((a, b) => a[field] < b[field] ? 1 : -1) :
        filterByFiller(fillerValue).sort((a, b) => a[field] < b[field] ? -1 : 1)
  }
  return (
      <div className="App">
        {cartOpened &&
            <Cart
                cartOpened={cartOpened}
                setCartOpened={id => setCartOpened(id)}
                cartContent={cartContent}
                setCartContent={i => setCartContent(i)}
                cost={cost}
            />
        }
        <div className="wrapper">
          <Header
              value={value}
              filterByTitle={filterByTitle}
              isRender={isRender}
              setIsRender={item => setIsRender(item)}
              setCartOpened={i => setCartOpened(i)}
              cartOpened={cartOpened}
              cost={cost}
          />
          <SortPanel
              isRender={isRender}
              sortByField={field => sortByField(field)}
              setIsRender={cards => setIsRender(cards)}
              setFillerValue={value => setFillerValue(value)}
              filterByFiller={filler => filterByFiller(filler)}
          />
          <main className="menu">
            {isRender.length===0 ? <h1 className={"no-pizza"}>Такой пиццы нет!</h1> :
                isRender.map(({...item}, index) =>
                    <Card
                        key={index}
                        {...item}
                        setCartContent={i => setCartContent(i)}
                        cartContent={cartContent}
                    />
                )}
          </main>
        </div>
        <footer>
          <b>
            <h1>Наши контакты:</h1>
            <p>inst1: <a href={"https://www.instagram.com/sanukcooltoday/"}>@Spenkau</a></p>
            <p>inst2: <a href={"https://www.instagram.com/magsadorchik/"}>@magsadorchik</a></p>
          </b>
        </footer>
      </div>
  );
}

export default App;