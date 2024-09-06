import { useState, useEffect, useRef, useMemo } from 'react';
import { useAnimationControls } from 'framer-motion';

import {UseTextVisibilityProps} from '../types/types_index';

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

export const useHoverEffect = (initialIndex: number, hoverImages: any[], onLastImage?: () => void) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialIndex);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          // 最後の画像に到達したらそのままにする
          if (nextIndex < hoverImages.length) {
            return nextIndex;
          } else {
            clearInterval(interval!); // タイマーをクリアする
            return prevIndex; // 最後の画像に固定
          }
        });
      }, 700);
    } else {
      setCurrentImageIndex(initialIndex); // ホバーが外れたら初期の画像に戻る
      if (interval) {
        clearInterval(interval);
      }
    }

    return () => {
      if (interval) {
        clearInterval(interval);
        
      }
    };
  }, [isHovered, hoverImages, initialIndex]);

  return { currentImageIndex, isHovered, setIsHovered };
};

export const useTextVisibility = ({
  isHovered,
  currentImageIndex,
  hoverStrawberryImages,
  currentColor,
  onLastImage,
  onHoverEnd,
}: UseTextVisibilityProps) => {
  useEffect(() => {
    if (isHovered && currentImageIndex === hoverStrawberryImages[currentColor].length - 1) {
      // 最後の画像に到達したらテキストを非表示
      onLastImage();
    } else {
      // ホバーが終了したらテキストを再表示
      onHoverEnd();
    }
  }, [isHovered, currentImageIndex, hoverStrawberryImages, currentColor, onLastImage, onHoverEnd]);
};

export const useMaxSize = () => {
  const [maxSize, setMaxSize] = useState({ maxWidth: '10vw', maxHeight: '10vw' });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 1200) {
        setMaxSize({ maxWidth: '35px', maxHeight: '35px' });  // 大きな画面の場合
      } else if (screenWidth > 768) {
        setMaxSize({ maxWidth: '25px', maxHeight: '25px' });  // 中くらいの画面の場合
      } else {
        setMaxSize({ maxWidth: '15px', maxHeight: '15px' });  // 小さな画面の場合
      }
    };

    // 初回のサイズ設定
    handleResize();

    // リサイズイベントのリスナーを設定
    window.addEventListener('resize', handleResize);

    // クリーンアップ
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return maxSize;
};

export const useImageHeight = (onImageLoad?: (height: number) => void) => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imageRef.current && onImageLoad) {
      onImageLoad(imageRef.current.clientHeight); // 画像の高さを親コンポーネントに渡す
    }
  }, [imageRef.current, onImageLoad]);

  return imageRef;
};

export const useAnimationWithHover = (isHovered: boolean) => {
  const controls = useAnimationControls();

  const animationVariants = useMemo(() => ({
    init: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
    hidden: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  }), []);

  useEffect(() => {
    if (isHovered) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isHovered, controls]);

  return { controls, animationVariants };
};

export const useDelayedPreview = (delay: number) => {
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreview(true); // Show the preview after the specified delay
    }, delay);

    return () => clearTimeout(timer); // Clear the timer on unmount
  }, [delay]);

  return showPreview;
};

export const useIsHoverable=()=>{
  const [isHoverable, setIsHoverable] = useState(true);

  useEffect(() => {
    const hoverableQuery = window.matchMedia('(hover: hover)');
    const updateHoverable = () => setIsHoverable(hoverableQuery.matches);

    // 初回評価
    updateHoverable();

    // リスナーでリアルタイムに変化を監視
    hoverableQuery.addEventListener('change', updateHoverable);

    return () => {
      hoverableQuery.removeEventListener('change', updateHoverable);
    };
  }, []);

    return isHoverable;
  }

