import React from 'react';
import { Button, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import GroupsIcon from '@mui/icons-material/Groups';

import { ProfileSectionTheme } from './Theme'

const ButtonLinks = () => {
  return (
    <ThemeProvider theme={ProfileSectionTheme}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 4, flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 2, sm: 0 }, }}>
          <Box
            component="a"
            href="https://github.com/sima9z"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textDecoration: 'none', marginRight: { sm: 2, xs: 0 } }}
          >
            <Button variant="contained" color="secondary" sx={{ zIndex: 20 }}>
              github
            </Button>
          </Box>
          
          <Box
            component="a"
            href="https://x.com/sima9z77407"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textDecoration: 'none', marginRight: { sm: 2, xs: 0 } }}
          >
            <Button variant="outlined" color="secondary" sx={{ zIndex: 20 }}>
              X
            </Button>
          </Box>

          <Box
            component="a"
            href="https://school.runteq.jp/social_portfolios/sima9z"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textDecoration: 'none' }}
          >
            <Button 
              variant="outlined" 
              sx={{ 
                zIndex: 20, 
                color:'white', 
                borderColor:'white',
                '&:hover': {
                  backgroundColor: '#F2A3A2',
                  borderColor:'white',
                } 
              }}
            >
             <GroupsIcon />
            </Button>
          </Box>
        </Box>
    </ThemeProvider>
  );
};

export default ButtonLinks;