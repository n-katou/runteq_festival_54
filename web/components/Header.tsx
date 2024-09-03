import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { FaGithub } from 'react-icons/fa';

import XIcon from '@mui/icons-material/X';

import HeaderLogoImage from '../public/index/header_logo.png';
import { shareOnX } from './shareOnX';

const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const router = useRouter(); // useRouterを使用して現在のURLを取得

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
      <Toolbar sx={{ padding: { xs: '0 4px', sm: '0 16px' } }}>
        <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
          <Box sx={{ width: { xs: '15%', sm: '10%', md: '8%' }, height: 'auto' }}>
            <Image src={HeaderLogoImage} alt="header logo" style={{ width: '100%', height: 'auto' }} />
          </Box>
          <Button href="/" sx={{ color: 'inherit', ml: { xs: 0, sm: '0.5rem' } }}>
            <Typography variant={getHeaderTitleVariant()} component="span" sx={{ fontWeight: 'bold' }}>
              RunteqFestival54
            </Typography>
          </Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0, sm: 1, md: 2 } }}>
          <Button color="inherit" href="/about" size={getHeaderMenuVariant()} sx={{ fontSize: getHeaderMenuFontSize(), padding: { xs: '4px 6px 4px 0', sm: '4px 5px' }, textAlign: 'right', justifyContent: 'flex-end', width: '100%' }}>
            About
          </Button>
          <IconButton color="inherit" href="https://github.com/n-katou/runteq_festival_54" target="_blank" > 
            <FaGithub sx={{ fontSize: { xs: '12px', sm: '24px' } }} />
          </IconButton>
          <IconButton color="inherit" onClick={() => shareOnX()} >
            <XIcon sx={{ fontSize: { xs: '20px', sm: '24px' } }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
