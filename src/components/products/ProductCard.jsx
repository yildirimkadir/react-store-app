import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const ProductCard = ({item}) => {
    const {category, description, image, price, title} = item;
  return (
    <div>
        <Card sx={{ maxWidth: 345, mt: '2rem' }}>
                <CardMedia
                 component="img"
                 height="200"
                 image={image}
                 sx={{objectFit:"contain"}}
                 alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {title}
                   </Typography>
                  <Typography variant="body2" color="text.secondary">
                   {price + "$"}
                  </Typography>
                </CardContent>
                <CardActions sx={{display:"flex", justifyContent:"space-between"}}>
                 <Typography gutterBottom variant="h5" component="div">
                    {category}
                   </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <IconButton>
                      < AddShoppingCartIcon/>
                    </IconButton>
                  </Typography>
                </CardActions>
              </Card>
    </div>
  )
}

export default ProductCard