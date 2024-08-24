import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Grid } from '@mui/material';

import GenericImage from './GenericImage';
import StrawberryLinks from './StrawberryLinks';

import FrameImage from '../../public/index/frame.png';
import RunteqFestivalImage from '../../public/index/runteq_festival.png';
import FiftyFourImage from '../../public/index/54.png';
import IchigoTabetaiImage from '../../public/index/ichigo_tabetai.png';
import ZeninSotugyouImage from '../../public/index/zenin_sotugyou.png';
import BasicStrawberries from './Basicstrawberries';
import KirakiraEffect from './KirakiraEffect';

const MainContent = () => {
  const [shouldDisplayStrawberries, setShouldDisplayStrawberries] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [adjustedTop, setAdjustedTop] = useState<number[]>([]);

  useEffect(() => {
    const updateDisplaySettings = () => {
      const verticalAspectRatio = window.innerHeight / window.innerWidth;

      // 縦長のアスペクト比が2以上かどうか
      const displayStrawberries = verticalAspectRatio >= 2.1;
      setShouldDisplayStrawberries(displayStrawberries);

      // 画面が大きい場合
      const largeScreen = window.innerWidth >= 1900 && window.innerHeight >= 1900;
      setIsLargeScreen(largeScreen);

      // 特定のアスペクト比範囲である場合に各行の top の値を調整
      if (!isLargeScreen && !displayStrawberries && verticalAspectRatio < 2.1 && verticalAspectRatio >= 1
      ) {
        setAdjustedTop([12, 36, 60, 82]); // 例: 各行の top を調整
      } else {
        setAdjustedTop([]); // デフォルト値に戻す
      }
    };

    // 初回のチェック
    updateDisplaySettings();

    // リサイズ時に縦方向のアスペクト比をチェック
    window.addEventListener('resize', updateDisplaySettings);

    // クリーンアップ
    return () => {
      window.removeEventListener('resize', updateDisplaySettings);
    };
  }, []);

  const getTopValue = (defaultTop: number, index: number): number => {
    return adjustedTop.length > index ? adjustedTop[index] : defaultTop;
  };

  return (
    <Grid item xs={12} className="relative py-6">
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
        style={{ 
          position: 'absolute', 
          top: '34%', 
          left: '40%', 
        }}
        scale={[0, 1.5, 0]}
        delay={0}
      />

      <KirakiraEffect 
        style={{ 
          position: 'absolute', 
          top: '36%', 
          left: '42%', 
        }}
        scale={[0, 0.7, 0]}
        delay={0.3}
      />

      <KirakiraEffect 
        style={{ 
          position: 'absolute', 
          top: '34%', 
          left: '54%', 
        }}
        scale={[0, 1.1, 0]}
        delay={0.6}
      />

      <KirakiraEffect 
        style={{ 
          position: 'absolute', 
          top: '43%', 
          left: '54%', 
        }}
        scale={[0, 0.9, 0]}
        delay={0.9}
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
        src={ZeninSotugyouImage}
        alt="zeninsotugyou"
        top={76}
        left={50}
        centered={true}
        widthPercent={77}
      />

      <BasicStrawberries positions={[10, 24, 38, 52, 66, 80]} top={getTopValue(81, 3)} initialColor={'green'} />

    </Grid>
  );
};

export default MainContent;