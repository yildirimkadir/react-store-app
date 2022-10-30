import './App.css';
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Card from './components/card/Card'
function App() {

  const [info, setInfo] = useState([]);
  const [card, setCard] = useState([]);
  const [showCard, setShowCard] = useState(false);


  const url = "https://fakestoreapi.com/products";

  const getProduct = async () => {
    try {
      const { data } = await axios.get(url);
      setInfo(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  const handleAddToCard = (product, quantity) => {
    const isAdded = card.some((item) => item.id === product.id);
    !isAdded && setCard([...card, { ...product, quantity }]);
  };
  console.log(info);
  console.log(card);
  return (
    <div>
      <Navbar totalItems={card?.length} showCard={showCard} setShowCard={setShowCard} />
      {!showCard ?
        <Products info={info} handleAddToCard={handleAddToCard} />
        : <Card />
      }
    </div>
  );
}

export default App;
