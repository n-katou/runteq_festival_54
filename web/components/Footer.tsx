import React from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import FooterLogoImage from '../public/index/footer_logo.png'

const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const getFooterCopyrightVariant = () => {
    if (isSmallScreen) {
      return 'subtitle2'; // 小さな画面
    } else if (isMediumScreen) {
      return 'h6'; // 中間の画面
    } else {
      return 'h6'; // 大きな画面
    }
  };

  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: '#FFC4D4', 
        display:'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        height: 'auto',
      }}
    >
      <Box sx={{ width: { xs: '10%', sm: '8%', md: '4%' }, height: 'auto' }}>
        <Image src={FooterLogoImage} alt="footer logo" style={{ width: '100%', height: 'auto' }} />
      </Box>
      <Typography variant={getFooterCopyrightVariant()} color='#fff' sx={{ ml: 1 }}>
        2024 RUNTEQ54
      </Typography>
    </Box>
  );
};

export default Footer;