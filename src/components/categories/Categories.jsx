import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Link } from '@mui/material/';

const Categories = ({handleClick}) => {
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
        <FormControlLabel value="all" control={<Radio />} label="All" onClick={(e)=>handleClick(e)}/>

        {categorie?.map((item, index)=> {
            
            return (
                <FormControlLabel key={index} value={item} control={<Radio />} label={item} onClick={(e)=>handleClick(e)} />
            )

        })}
      </RadioGroup>
    </FormControl>
    </div>
  )
}

export default Categories