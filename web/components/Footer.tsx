import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: '#FFC4D4', 
        padding: '16px', 
        textAlign: 'center', 
        marginTop: 'auto' 
      }}
    >
      <Typography variant="body2" color='#fff'>
        &copy; 2024 RUNTEQ54
      </Typography>
    </Box>
  );
};

export default Footer;