import React, { useState,useEffect } from 'react';
import { Box, Grid } from '@mui/material';

import GenericImage from './GenericImage';
import StrawberryLinks from './StrawberryLinks';
import BasicStrawberries from './Basicstrawberries';
import KirakiraEffect from './KirakiraEffect';

import RunteqFestivalImage from '../../public/index/runteq_festival.png';
import FiftyFourImage from '../../public/index/54.png';
import IchigoTabetaiImage from '../../public/index/ichigo_tabetai.png';
import ReactSaikoImage from '../../public/index/react_saiko.png';

import { useDisplaySettings } from '../../hooks/hooks_index';

const MainContent = () => {
  const { shouldDisplayStrawberries, isLargeScreen, adjustedTop } = useDisplaySettings();
  const [minHeight, setMinHeight] = useState('100vh');

  useEffect(() => {
    // 各画像のtopを配列に格納
    const tops = [38, 60, 80, 130];  // 必要に応じて調整
    // 最大のtop値を取得し、十分なマージンを加える
    const maxTop = Math.max(...tops) + 20; // 20は余裕を持たせるための値
    // 新しいminHeightを設定
    setMinHeight(`${maxTop}vh`);
  }, []);

  const getTopValue = (defaultTop: number, index: number): number => {
    return adjustedTop.length > index ? adjustedTop[index] : defaultTop;
  };

  return (
    <Box 
      style={{ 
        width: '100%', 
        height: 'auto', 
        minHeight: minHeight, 
        padding: '20px', 
        margin: '50px 50px',
        boxSizing: 'border-box', 
        border: "30px double #fff", 
        position: 'relative', 
        flexDirection: 'column', 
        alignItems: 'center',
        display: 'flex',
      }}
    >
      <Grid 
        container 
        direction="column" 
        alignItems="center" 
        justifyContent="flex-start" // 中央揃えを解除
        style={{ 
          width: '100%', 
        }}
      >
        <StrawberryLinks initialColor={'red'} positions={[7, 29, 60, 82]} top={getTopValue(6, 0)} />

        {(isLargeScreen || shouldDisplayStrawberries) && (
          <BasicStrawberries positions={[7, 29, 60, 82]} top={15} initialColor={'white'} />
        )}

        <GenericImage
          src={RunteqFestivalImage}
          alt="runteq festival"
          top={38}
          left={50}
          centered={true}
          widthPercent={77}
        />

        <BasicStrawberries positions={[24, 66]} top={getTopValue(52, 1)} initialColor={'pink'} />

        {(isLargeScreen || shouldDisplayStrawberries) && (
          <BasicStrawberries positions={[7, 29, 60, 82]} top={41} initialColor={'green'} />
        )}

        <GenericImage
          src={FiftyFourImage}
          alt="fifty four"
          top={60}
          left={50}
          centered={true}
          widthPercent={13}
        />

        <KirakiraEffect
          effects={[
            { style: { position: 'absolute', top: '50%', left: '40%' }, scale: [0, 1.5, 0], delay: 0 },
            { style: { position: 'absolute', top: '54%', left: '42%' }, scale: [0, 0.7, 0], delay: 0.3 },
            { style: { position: 'absolute', top: '46%', left: '54%' }, scale: [0, 1.1, 0], delay: 0.6 },
            { style: { position: 'absolute', top: '60%', left: '54%' }, scale: [0, 0.9, 0], delay: 0.9 }
          ]}
        />

        <GenericImage
          src={IchigoTabetaiImage}
          alt="ichigotabetai"
          top={80}
          left={50}
          centered={true}
          widthPercent={77}
        />

        <BasicStrawberries positions={[7, 29, 60, 82]} top={getTopValue(95, 2)} initialColor={'white'} />

        {(isLargeScreen || shouldDisplayStrawberries) && (
          <BasicStrawberries positions={[7, 29, 60, 82]} top={65} initialColor={'red'} />
        )}

        <GenericImage
          src={ReactSaikoImage}
          alt="reactsaiko"
          top={130}
          left={50}
          centered={true}
          widthPercent={62}
        />

        <BasicStrawberries positions={[7, 29, 60, 82]} top={getTopValue(140, 3)} initialColor={'green'} />
      </Grid>
    </Box>
  );
};
  
  export default MainContent;