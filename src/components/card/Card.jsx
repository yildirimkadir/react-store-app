import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {Container, Grid} from '@mui/material/';
import { useState } from 'react';
const Cart = ({card, setCard,  handleUpdateCartQty, handleRemove, handleEmptyCart}) => {
    console.log(card)
  return (
    <div>
        <Container>
        <Grid sx={{mt:5}} container spacing={2}>
        {card?.map((item) => {
             const {image, price, title, id, quantity} = item;
            return(
            <Grid item>
            <Card key={id} sx={{ maxWidth: 345, mt: '2rem' }}>
                <CardMedia
                 component="img"
                 height="200"
                 image={image}
                 sx={{objectFit:"contain"}}
                 alt="green iguana"
                />
                <CardContent>
                  <Typography fontSize="small" gutterBottom component="div">
                    {title}
                   </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                   {price + "$"}
                  </Typography>
                </CardContent>
                <CardActions sx={{display:"flex", justifyContent:"space-between"}}>
                  <Typography variant="h5" color="text.secondary">
                  <AddIcon sx={{marginRight:"8px", marginTop:"15px"}} fontSize="small" onClick={() =>
                handleUpdateCartQty(id, quantity + 1)}/>
                  {quantity}
                  <RemoveIcon sx={{ml:"8px"}} fontSize="small" onClick={() =>
                handleUpdateCartQty(id, quantity - 1)} />
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <IconButton>
                      <Button variant="contained" onClick={() => handleRemove(id)}>Remove</Button>
                    </IconButton>
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
            )
        })}
        </Grid>

      </Container>
    </div>
  )
}

export default Cart