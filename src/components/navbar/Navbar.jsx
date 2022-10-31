import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import storeApp from '../../assets/store-app3.png'
import { Link } from '@mui/material/';

export default function MenuAppBar({totalItems, showCard, setShowCard}) {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = () => {
    setShowCard(!showCard)
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color='inherit' sx={{
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
      }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
        <Link
          href="/"
        >
        <img src={storeApp} height="50px" width="40px" alt="storeApp"></img>
        </Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Store-App
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
              >
              <Badge badgeContent={totalItems} color="primary" max={99}>
              <ShoppingCartIcon color="action" />
              </Badge>
            </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
