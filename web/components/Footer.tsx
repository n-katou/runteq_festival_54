import React from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import FooterLogoImage from '../public/index/footer_logo.png'

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: '#FFC4D4', 
        display:'flex', 
        alignItems: 'center',
        justifyContent: 'center' 
      }}
    >
        <Image src={FooterLogoImage} alt={'footer logo'} className={`footer-logo-image`} style={{ width: '3%', height: 'auto' }} />
        <Typography variant="body2" color='#fff'>
          2024 RUNTEQ54
        </Typography>
    </Box>
  );
};

export default Footer;