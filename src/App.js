import './App.css';
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Cart from './components/card/Card'
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

  const handleUpdateCartQty = (productId, quantity) => {
    if (quantity === 0) {
      handleRemove(productId);
    } else {
      const updatedCard = card.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
      setCard(updatedCard);
    }
  };

  const handleRemove = (productId) => {
    const filterCard = card.filter((item) => item.id !== productId);
    setCard(filterCard);
  };

  const handleEmptyCart = () => setCard([]);





  console.log(info);
  console.log(card);
  return (
    <div>
      <Navbar totalItems={card?.length} showCard={showCard} setShowCard={setShowCard} />
      {!showCard ?
        <Products info={info} handleAddToCard={handleAddToCard} />
        : <Cart card={card} setCard={setCard} handleUpdateCartQty={handleUpdateCartQty}
          handleRemove={handleRemove}
          handleEmptyCart={handleEmptyCart} />
      }
    </div>
  );
}

export default App;
