import React from 'react'
import Categories from '../categories/Categories'
import {Container, Grid} from '@mui/material/';
import { useState } from 'react';
import ProductCard from './ProductCard';
const Products = ({info, handleAddToCard}) => {
const [radioBut, setRadioBut] = useState();

const handleClick = (e) => {
  if (e.target.value == "all") {
    setRadioBut("");
  } else if (e.target.value) {
    setRadioBut(e.target.value)
  }
}
console.log(radioBut)

  return (
    <div>
        <Container>
        <Categories handleClick={handleClick}/>
        <Grid sx={{mt:5}} container spacing={4}>
        {!radioBut ? info.map((item) => {
            console.log(item);
            return(
            <Grid item>
            <ProductCard handleAddToCard={handleAddToCard} item={item} radioBut={radioBut}/>
            </Grid>
            )
        }) : info.filter((items)=>items.category==radioBut).map((item) => {
            console.log(item);
            return(
            <Grid item>
            <ProductCard handleAddToCard={handleAddToCard} item={item} radioBut={radioBut}/>
            </Grid>
            )
            })
}
        </Grid>

      </Container>
    </div>
  )
}

export default Products