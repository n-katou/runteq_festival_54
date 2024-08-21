import React from 'react';
import Image from 'next/image';
import { Grid } from '@mui/material';

import GenericImage from './GenericImage';
import RandomStrawberries from './RandomStrawberries';
import StrawberryLinks from './StrawberryLinks';

import FrameImage from '../../public/index/frame.png';
import RunteqFestivalImage from '../../public/index/runteq_festival.png';
import FiftyFourImage from '../../public/index/54.png';
import IchigoTabetaiImage from '../../public/index/ichigo_tabetai.png';
import ZeninSotugyouImage from '../../public/index/zenin_sotugyou.png';

const src = RunteqFestivalImage.src;

const MainContent = () => {
  return (
    <Grid item xs={12} className="relative">
      <Image
        src={FrameImage}
        alt="frame"
        className="frame-image"
        style={{ width: '100%', height: 'auto' }}
        layout="responsive"
      />

      <StrawberryLinks />

      <GenericImage
        src={RunteqFestivalImage}
        alt="runteq festival"
        top={28}
        left={50}
        centered={true}
        widthPercent={77}
      />

      <RandomStrawberries positions={[10, 24, 66, 80]} top={34} />

      <GenericImage
        src={FiftyFourImage}
        alt="fifty four"
        top={40}
        left={50}
        centered={true}
        widthPercent={13}
      />

      <GenericImage
        src={IchigoTabetaiImage}
        alt="ichigotabetai"
        top={52}
        left={50}
        centered={true}
        widthPercent={77}
      />

      <RandomStrawberries positions={[10, 24, 38, 52, 66, 80]} top={58} />

      <GenericImage
        src={ZeninSotugyouImage}
        alt="zeninsotugyou"
        top={76}
        left={50}
        centered={true}
        widthPercent={77}
      />

      <RandomStrawberries positions={[10, 24, 38, 52, 66, 80]} top={82} />
    </Grid>
  );
};

export default MainContent;