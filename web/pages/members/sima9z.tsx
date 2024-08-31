import React from 'react';
import Image from 'next/image';

import { Container, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import HeadSection from '../../components/sima9z/HeadSection'
import ProfileSection from '../../components/sima9z/ProfileSection'
import ButtonLinks from '../../components/sima9z/ButtonLinks'
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

        <ButtonLinks />

        <CreateApplicationsSection />
      </Container>
    </ThemeProvider>
  );
};

export default Sima9zPage
