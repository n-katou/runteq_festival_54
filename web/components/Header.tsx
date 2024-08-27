import React from 'react';
import Image from 'next/image';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import HeaderLogoImage from '../public/index/header_logo.png'

const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const getHeaderTitleVariant = () => {
    if (isSmallScreen) {
      return 'subtitle1'; // 小さな画面
    } else if (isMediumScreen) {
      return 'h6'; // 中間の画面
    } else {
      return 'h5'; // 大きな画面
    }
  };

  const getHeaderMenuVariant = () => {
    if (isSmallScreen) {
      return 'small'; // 小さな画面
    } else if (isMediumScreen) {
      return 'medium'; // 中間の画面
    } else {
      return 'large'; // 大きな画面
    }
  };

  const getHeaderMenuFontSize = () => {
    if (isSmallScreen) {
      return '60%'; // 小さな画面
    } else if (isMediumScreen) {
      return '80%'; // 中間の画面
    } else {
      return '100%'; // 大きな画面
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#FFC4D4', color: '#fff' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
            <Box sx={{ width: { xs: '15%', sm: '10%', md: '8%' }, height: 'auto' }}>
              <Image src={HeaderLogoImage} alt="header logo" style={{ width: '100%', height: 'auto' }} />
            </Box>
            <Button href="/" sx={{ color: 'inherit', ml:1 }}>
              <Typography variant={getHeaderTitleVariant()} component="span" sx={{ fontWeight: 'bold' }}>
                RunteqFestival54
              </Typography>
            </Button>
        </Box>
        <Box sx={{ display: 'flex'}}>
          <Button color="inherit" href="/about" className={``} size={getHeaderMenuVariant()} sx={{fontSize: getHeaderMenuFontSize()}}>About</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;