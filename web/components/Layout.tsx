import React, { ReactNode } from 'react';

import Header from './Header';
import Footer from './Footer';

import Box from '@mui/material/Box';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;