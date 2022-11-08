import "./styles.scss"
import Header from "./components/Header";
import Sorting from "./components/Sorting";
import Card from "./components/Card";
import PizzaBackground from "./components/PizzaBackground";
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
    }
  ]

  const [isFilled, setIsFilled] = useState(2)

  function cardsRender(func) {
    return func.map(({...item}, index) =>
        <Card
            key = {index}
            {...item}
        />
    )
  }

  function sortByFiller(filler) {
    if ((filler === 0) || (filler === 1)) {
      return data.filter(i => {
        return i.isMeat === filler
      })
    } else {
      return data
    }
  }

  function sortByField(field) {
    return (a, b) => a[field] < b[field] ? 1 : -1;
  }
  console.log(data.sort(sortByField('price')))

  return (
    <div className="App">
      <PizzaBackground />
      <Cart />
      <div className="wrapper">
        <Header />
        <Sorting isFilled={isFilled} setIsFilled={(id) => setIsFilled(id)} />
        <div className="menu">
          {cardsRender(sortByFiller(isFilled))}
        </div>
      </div>
    </div>
  );
}

export default App;
