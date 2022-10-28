import './App.css';
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
function App() {

  const [info, setInfo] = useState([]);

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

  console.log(info);

  return (
    <div>
      <Navbar />
      <Products info={info} />
    </div>
  );
}

export default App;
