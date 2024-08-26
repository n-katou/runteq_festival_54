import React from 'react';
import Image from 'next/image';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import HeaderLogoImage from '../public/index/header_logo.png'

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#FFC4D4', color: '#fff' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <Image src={HeaderLogoImage} alt={'header logo'} className={`header-logo-image`} style={{ width: '7%', height: 'auto' }} />
          <Button href="/" sx={{ color: 'inherit' }}>
            <Typography variant="h5" component="span" sx={{ fontWeight: 'bold' }}>
              RunteqFestival54
            </Typography>
          </Button>
          <Image src={HeaderLogoImage} alt={'header logo'} className={`header-logo-image`} style={{ width: '7%', height: 'auto' }} />
        </Box>
        <Box sx={{ display: 'flex'}}>
          <Button color="inherit" href="/about" className={``} size="large" sx={{fontSize: '100%'}}>About</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;