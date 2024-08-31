import React from 'react';
import Image from 'next/image';
import { Box, Grid } from '@mui/material';

import GenericImage from './GenericImage';
import StrawberryLinks from './StrawberryLinks';
import KirakiraEffect from './KirakiraEffect';

import RunteqFestivalImage from '../../public/index/runteq_festival.png';
import FiftyFourImage from '../../public/index/54.png';
import IchigoTabetaiImage from '../../public/index/ichigo_tabetai.png';
import ReactSaikoImage from '../../public/index/react_saiko.png';

import TVImage from '../../public/index/TV.png';

const MainContent = () => {

    // 各段ごとのリンク情報を定義
    const links1 = [
      { href: "/members/kato", text: "加藤" },
      { href: "/members/mick", text: "mick" },
      { href: "/members/nori", text: "nori" },
      { href: "/members/konisi", text: "小西" },
    ];
  
    const links2 = [
      { href: "/members/knnts", text: "かなナッツ"  },
      { href: "/members/mchan", text: "Mちゃん"  },
    ];
  
    const links3 = [
      { href: "/members/natsu", text: "natsu" },
      { href: "/members/rei", text: "rei" },
    ];
  
    const links4 = [
      { href: "/contact/PC", text: "PC" },
    ];

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
            <StrawberryLinks initialColor={'pink'} positions={[7, 29, 60, 82]} links={links1} />
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
            <StrawberryLinks positions={[24, 66]} initialColor={'red'} links={links2}/>

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
            <StrawberryLinks positions={[7, 29, 60, 82]} initialColor={'white'} links={links3}/>
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
            <StrawberryLinks positions={[7, 29, 60, 82]} initialColor={'green'} links={links4}/>
          </Grid>
        </Grid>
      </Box>

      <Image
        src={ TVImage }
        alt={ 'TVImage' }
        className={ 'TVImage' }
        style={{
          width: '25%',
          height: 'auto',
          position: 'fixed',
          left: 30,
          bottom: 10,
        }} 
      />

      <Image
        src={ TVImage }
        alt={ 'TVImage' }
        className={ 'TVImage' }
        style={{
          width: '25%',
          height: 'auto',
          position: 'fixed',
          right: 30,
          bottom: 10,
        }} 
      />
    </>
  );
};
  
  export default MainContent;