import { useState, useEffect } from 'react';

export function useDisplaySettings () {
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

  return { shouldDisplayStrawberries, isLargeScreen, adjustedTop };
};

export const useHoverEffect = (initialIndex: number, hoverImages: any[]) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialIndex);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % hoverImages.length);
      }, 700);

      return () => clearInterval(interval);
    } else {
      setCurrentImageIndex(initialIndex); // ホバーが外れたら初期の画像に戻る
    }
  }, [isHovered, hoverImages, initialIndex]);

  return { currentImageIndex, isHovered, setIsHovered };
};