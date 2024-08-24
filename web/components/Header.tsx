import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#FFC4D4', color: '#fff' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Button href="/" sx={{ color: 'inherit' }}>
            <Typography variant="h5" component="span" sx={{ fontWeight: 'bold' }}>
              RunteqFestival54
            </Typography>
          </Button>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" href="/about">About</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;