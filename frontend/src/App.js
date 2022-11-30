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
  const [cartContent, setCartContent] = useState([])

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
        {cartOpened && <Cart cartOpened={cartOpened} setCartOpened={id => setCartOpened(id)} cartContent={cartContent} />}
        <div className="wrapper">
          <Header
              setValue={id => setValue(id)}
              filterByTitle={filterByTitle}
              setIsRender={item => setIsRender(item)}
              setCartOpened={i => setCartOpened(i)}
              cartOpened={cartOpened}
          />
          <Sorting
              setIsRender={cards => setIsRender(cards)}
              setFillerValue={value => setFillerValue(value)}
              sortByField={field => sortByField(field)}
              filterByFiller={filler => filterByFiller(filler)}
          />
          <div className="menu">
            {isRender.map(({...item}, index) =>
                <Card
                    key={index}
                    {...item}
                    setCartContent={i => setCartContent(i)}
                    cartContent={cartContent}
                />
            )}
          </div>
        </div>
      </div>
  );
}

export default App;


