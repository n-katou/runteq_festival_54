import React, { useState,useEffect } from 'react';
import Image from 'next/image';
import { Box, Grid } from '@mui/material';

import GenericImage from './GenericImage';
import StrawberryLinks from './StrawberryLinks';
import BasicStrawberries from './Basicstrawberries';
import KirakiraEffect from './KirakiraEffect';

import RunteqFestivalImage from '../../public/index/runteq_festival.png';
import FiftyFourImage from '../../public/index/54.png';
import IchigoTabetaiImage from '../../public/index/ichigo_tabetai.png';
import ReactSaikoImage from '../../public/index/react_saiko.png';

import TVImage from '../../public/index/TV.png';

const MainContent = () => {

  return (
    <>
      <Box
        sx={{ 
          width: '100%', 
          height: 'auto', 
          margin: '50px 10px',
          padding: '50px 150px 200px 150px',
          boxSizing: 'border-box', 
          display: 'flex',
          flexDirection: 'column', 
          alignItems: 'center',
          border: {
            xs: '10px double #fff',  // 小さな画面用
            sm: '20px double #fff',  // 中くらいの画面用
            lg: '30px double #fff',  // 大きな画面用
          }
        }}
      >
        <Grid container direction="column" alignItems="center" spacing={20}>
          <Grid item>
            <StrawberryLinks initialColor={'pink'} positions={[7, 29, 60, 82]} />
          </Grid>

          <Grid item>
            <GenericImage
              src={RunteqFestivalImage}
              alt="runteq festival"
              centered={true}
              widthPercent={77}
            />
          </Grid>

          <Grid item>
            <BasicStrawberries positions={[24, 66]} initialColor={'red'} />

            <GenericImage
              src={FiftyFourImage}
              alt="fifty four"
              centered={true}
              widthPercent={13}  // 画像サイズを調整
            >
              <KirakiraEffect
                effects={[
                  { style: { position: 'absolute', top: '-15%', left: '-15%' }, scale: [0, 1.5, 0], delay: 0 },
                  { style: { position: 'absolute', top: '3%', left: '70%' }, scale: [0, 0.7, 0], delay: 0.3 },
                  { style: { position: 'absolute', top: '-10%', left: '80%' }, scale: [0, 1.1, 0], delay: 0.6 },
                  { style: { position: 'absolute', top: '65%', left: '2%' }, scale: [0, 0.9, 0], delay: 0.9 }
                ]}
              />
            </GenericImage>
          </Grid>

          <Grid item>
            <GenericImage
              src={IchigoTabetaiImage}
              alt="ichigotabetai"
              centered={true}
              widthPercent={77}
            />
          </Grid>

          <Grid item>
            <BasicStrawberries positions={[7, 29, 60, 82]} initialColor={'white'} />
          </Grid>

          <Grid item>
            <GenericImage
              src={ReactSaikoImage}
              alt="reactsaiko"
              centered={true}
              widthPercent={62}
            />
          </Grid>

          <Grid item>
            <BasicStrawberries positions={[7, 29, 60, 82]} initialColor={'green'} />
          </Grid>
        </Grid>
      </Box>

      <Image
        src={ TVImage }
        alt={ 'TVImage' }
        className={ 'TVImage' }
        style={{
          width: '20%',
          height: 'auto',
          position: 'fixed',
          left: 30,
          bottom: 10,
        }} 
      />
    </>
  );
};
  
  export default MainContent;