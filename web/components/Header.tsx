import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static" sx={{ backgroundColor: '#FFC4D4', color: '#fff' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          RunteqFestival54
        </Typography>

        {/* デスクトップ用 */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Button sx={{ color: '#fff' }} href="/">Home</Button>
          <Button sx={{ color: '#fff' }} href="/about">About</Button>
          <Button sx={{ color: '#fff' }} href="/contact">Contact</Button>
        </Box>

        {/* モバイル用 */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>
              <Button sx={{ color: '#fff' }} href="/">Home</Button>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Button sx={{ color: '#fff' }} href="/about">About</Button>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Button sx={{ color: '#fff' }} href="/contact">Contact</Button>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;