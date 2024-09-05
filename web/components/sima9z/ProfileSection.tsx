import React from 'react';
import { Container, Box, Grid, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Image from 'next/image';

import { ProfileSectionTheme } from './Theme'

const ProfileSection = () => {
  return (
    <ThemeProvider theme={ProfileSectionTheme}>
      <Container 
        maxWidth="lg" 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid container alignItems="center" justifyContent="center" spacing={4} sx={{ maxWidth: '800px', marginTop: 8, textAlign: { xs: 'center', sm: 'left' } }}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                src="/sima9z/profile.jpg"
                alt="Profile"
                width={200}
                height={200}
                style={{ borderRadius: '50%', border: '4px solid #fff' }} 
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h4" sx={{ color: '#ff3e60', fontFamily: 'Comic Sans MS, Arial Rounded MT Bold, sans-serif', marginBottom: 2 }}>
              Profile
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
              フロントエンド大好き人間。<br />
              トップページのコーディングを担当しました。<br />
              センスほしい。
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default ProfileSection;