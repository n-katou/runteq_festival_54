import React from 'react';

import { Box, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { Theme } from '../../components/sima9z/Theme'
import ButtonLinks from '../../components/sima9z/ButtonLinks'

const HeadSection: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Box
        sx={{
          position: 'relative',
          top: 0,
          bgcolor: '#D56866',
          padding: 12,
          textAlign: 'center',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: 'white',
            fontFamily: 'Pacifico, cursive',
            textAlign: 'center',  // テキストを中央揃え
            width: '100%',        // 親要素全体に広がるように設定
            fontSize: {
              xs: '3rem', // 小さい画面での文字サイズ
              sm: '4rem', // 中くらいの画面での文字サイズ
              md: '4rem', // 大きな画面での文字サイズ
              lg: '5rem', // 非常に大きな画面での文字サイズ
            },
          }}
        >
          Sima9z Page
        </Typography>
        <ButtonLinks />
      </Box>
    </ThemeProvider>
  );
};

export default HeadSection;