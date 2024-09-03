import React, { useState, useEffect } from 'react';
import { CssBaseline, Box, Grid } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import MainContent from '../components/index/MainContent';
import Curve from '../public/transition/index';

const cache = createCache({ key: 'css', prepend: true });

export default function Home() {
  // Curveアニメーションを管理するためのstate
  const [isCurveComplete, setIsCurveComplete] = useState<boolean>(false);

  useEffect(() => {
    // ここでCurveの完了を監視し、完了したらtrueとする
    const timer = setTimeout(() => {
      setIsCurveComplete(true);
    }, 1000); // 1秒後に表示
    return () => clearTimeout(timer); // 終わったらクリア
  }, []);

  return (
      <Curve>
        {isCurveComplete && (
          <CacheProvider value={cache}>
            <CssBaseline />
            <Box className="relative w-full h-auto bg-[#A1E0E6]" display="flex" justifyContent="center" alignItems="center" sx={{boxShadow: '0px -2px 2px inset gray, 0px 2px 2px inset gray'}}>
              <Grid container justifyContent="center" alignItems="center" className="relative w-full max-w-4xl">
                <MainContent />
              </Grid>
            </Box>
          </CacheProvider>
        )}
      </Curve>
  );
}
