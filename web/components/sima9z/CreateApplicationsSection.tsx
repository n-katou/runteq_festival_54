import React from 'react';

import { Box, Grid, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { Theme } from './Theme'
import ReusableCard from './ReusableCard'

const CreateApplicationsSection: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Box sx={{ textAlign: 'center', padding: 8 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Typography variant="h4">Create applications</Typography>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={4} sx={{ marginBottom: 8 }}>
        <Grid item xs={12} sm={4}>
          <ReusableCard
            imageSrc="/sima9z/dagasiya.png"
            imageAlt="dagasiya"
            title="だがしや"
            description="駄菓子の購入シミュレートアプリ。<br />デプロイ体験とミニアプリウィークに提出する為に作りました。<br />非レスポンシブ対応。"
            link="https://dagashi.onrender.com/"
            bgcolor="#EDC9C5"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ReusableCard
            imageSrc="/sima9z/hosinozukan.png"
            imageAlt="hosinozukan"
            title="星の図鑑"
            description="星座と惑星の図鑑及び星座占いアプリ。<br />バトランに提出する為に作りました。<br />レスポンシブ対応済み（ほぼ）。<br />流れ星がポイント。"
            link="https://sign-dxuu.onrender.com/"
            bgcolor="#E8B0AC"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ReusableCard
            imageSrc="/sima9z/virtualpet.png"
            imageAlt="virtualpet"
            title="バーチャルペット フレンズ"
            description="卒業制作アプリ。<br />犬と猫を飼えるゲーム。<br />GSAP使用。<br />目下、鋭意作業中。"
            link="#"
            bgcolor="#E8A9A5"
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default CreateApplicationsSection;