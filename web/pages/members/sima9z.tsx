import React from 'react';
import Image from 'next/image';

import { Container, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import HeadSection from '../../components/sima9z/HeadSection'
import ProfileSection from '../../components/sima9z/ProfileSection'
import CreateApplicationsSection from '../../components/sima9z/CreateApplicationsSection'

import { Theme } from '../../components/sima9z/Theme'
import GoHomeButton from '../../components/GoHomeButton';


const Sima9zPage: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Box sx={{ backgroundColor: 'white' }}>
        <Box sx={{ position: 'relative', width: '100%', height: '100vh', zIndex: 10, pointerEvents: 'none' }}>
          <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <Image
              src="/sima9z/strawberry_frame.png"
              alt="strawberry_frame"
              width={1920}
              height={1080}
              objectFit="contain"
              style={{ pointerEvents: 'none', width: '100%', height: 'auto' }}
            />
          </Box>
        </Box>

        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 0,
            marginTop: '-70vh',
            '@media (max-width: 1000px)': {
              marginTop: '-80vh',
            },
            '@media (max-width: 700px)': {
              marginTop: '-90vh',
            },
          }}
        >
          <HeadSection />

          <ProfileSection />

          <CreateApplicationsSection />

        </Container>
        <GoHomeButton />
      </Box>
    </ThemeProvider>
  );
};

export default Sima9zPage
