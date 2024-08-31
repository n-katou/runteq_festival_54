import React from 'react';
import Image from 'next/image';

import { Container, Box, Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import HeadSection from '../../components/sima9z/HeadSection'
import ProfileSection from '../../components/sima9z/ProfileSection'
import Links from '../../components/sima9z/Links'
import CreateApplicationsSection from '../../components/sima9z/CreateApplicationsSection'

import { Theme } from '../../components/sima9z/Theme'

const Sima9zPage: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Box sx={{ position: 'relative', width: '100%', height: 'calc(100vh - 64px)', zIndex: 10, pointerEvents: 'none' }}>
        <Image
          src="/sima9z/strawberry_frame.png"
          alt="strawberry_frame"
          layout="fill"
          objectFit="cover"
          style={{ pointerEvents: 'auto' }}
        />
      </Box>

      <Container maxWidth="lg"  sx={{ position: 'relative', zIndex: 0, marginTop: '-100vh', paddingTop: '10vh' }}>
        <HeadSection />

        <ProfileSection />

        <Links />

        <CreateApplicationsSection />
      </Container>
    </ThemeProvider>
  );
};

export default Sima9zPage
