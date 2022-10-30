import React from 'react'
import Categories from '../categories/Categories'
import {Container, Grid} from '@mui/material/';
import { useState } from 'react';
import ProductCard from './ProductCard';
const Products = ({info, handleAddToCard}) => {
// const [category, setCategory] = useState([])

  return (
    <div>
        <Container>
        <Categories />
        <Grid sx={{mt:5}} container spacing={4}>
        {info?.map((item) => {
            return(
            <Grid item>
            <ProductCard handleAddToCard={handleAddToCard} item={item}/>
            </Grid>
            )
        })}
        </Grid>

      </Container>
    </div>
  )
}

export default Products