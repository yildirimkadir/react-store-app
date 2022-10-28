import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const Categories = () => {
    const [categorie, setCategorie] = useState([])

    const url = "https://fakestoreapi.com/products/categories";

  const getCategorie = async () => {
    try {
      const { data } = await axios.get(url);
      setCategorie(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategorie();
  }, []);
console.log(categorie);
  return (
    <div>
        <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="All" control={<Radio />} label="All" />

        {categorie?.map((item, index)=> {
            console.log(item);
            return (
                <FormControlLabel key={index} value={item} control={<Radio />} label={item} />
            )

        })}
      </RadioGroup>
    </FormControl>
    </div>
  )
}

export default Categories