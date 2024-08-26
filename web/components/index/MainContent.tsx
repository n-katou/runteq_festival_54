import React from 'react';
import Image from 'next/image';
import { Grid } from '@mui/material';

import GenericImage from './GenericImage';
import StrawberryLinks from './StrawberryLinks';
import BasicStrawberries from './Basicstrawberries';
import KirakiraEffect from './KirakiraEffect';

import FrameImage from '../../public/index/frame.png';
import RunteqFestivalImage from '../../public/index/runteq_festival.png';
import FiftyFourImage from '../../public/index/54.png';
import IchigoTabetaiImage from '../../public/index/ichigo_tabetai.png';
import ReactSaikoImage from '../../public/index/react_saiko.png';

import { useDisplaySettings } from '../../hooks/hooks_index';

const MainContent = () => {
  const { shouldDisplayStrawberries, isLargeScreen, adjustedTop } = useDisplaySettings();

  const getTopValue = (defaultTop: number, index: number): number => {
    return adjustedTop.length > index ? adjustedTop[index] : defaultTop;
  };

  return (
    <Grid item xs={12} className="relative py-12">
      <Image
        src={FrameImage}
        alt="frame"
        className="frame-image"
        style={{ width: 'auto', height: 'auto', minHeight: '100vh' }}
      />

      <StrawberryLinks initialColor={'red'} positions={[10, 24, 38, 52, 66, 80]} top={getTopValue(10, 0)} />

      {(isLargeScreen || shouldDisplayStrawberries) && (
        <BasicStrawberries positions={[10, 24, 38, 52, 66, 80]} top={17} initialColor={'white'} />
      )}

      <GenericImage
        src={RunteqFestivalImage}
        alt="runteq festival"
        top={28}
        left={50}
        centered={true}
        widthPercent={77}
      />

      <BasicStrawberries positions={[10, 24, 66, 80]} top={getTopValue(34, 1)} initialColor={'pink'} />

      {(isLargeScreen || shouldDisplayStrawberries) && (
        <BasicStrawberries positions={[10, 24, 66, 80]} top={41} initialColor={'green'} />
      )}

      <GenericImage
        src={FiftyFourImage}
        alt="fifty four"
        top={40}
        left={50}
        centered={true}
        widthPercent={13}
      />

      <KirakiraEffect
        effects={[
          { style: { position: 'absolute', top: '34%', left: '40%' }, scale: [0, 1.5, 0], delay: 0 },
          { style: { position: 'absolute', top: '36%', left: '42%' }, scale: [0, 0.7, 0], delay: 0.3 },
          { style: { position: 'absolute', top: '34%', left: '54%' }, scale: [0, 1.1, 0], delay: 0.6 },
          { style: { position: 'absolute', top: '43%', left: '54%' }, scale: [0, 0.9, 0], delay: 0.9 }
        ]}
      />

      <GenericImage
        src={IchigoTabetaiImage}
        alt="ichigotabetai"
        top={52}
        left={50}
        centered={true}
        widthPercent={77}
      />

      <BasicStrawberries positions={[10, 24, 38, 52, 66, 80]} top={getTopValue(59, 2)} initialColor={'white'} />

      {(isLargeScreen || shouldDisplayStrawberries) && (
        <BasicStrawberries positions={[10, 24, 38, 52, 66, 80]} top={65} initialColor={'red'} />
      )}

      <GenericImage
        src={ReactSaikoImage}
        alt="reactsaiko"
        top={76}
        left={50}
        centered={true}
        widthPercent={62}
      />

      <BasicStrawberries positions={[10, 24, 38, 52, 66, 80]} top={getTopValue(81, 3)} initialColor={'green'} />

    </Grid>
  );
};

export default MainContent;