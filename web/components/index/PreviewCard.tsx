import React, { memo } from 'react';
import { motion } from 'framer-motion';

import { PreviewCardProps } from '../../types/types_index';

import LoadingImage from '../../public/index/loading.png';

const PreviewCard: React.FC<PreviewCardProps> = ({ title, link }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{
          position: 'fixed',
          left: '20px',
          top: '80px',
          width: '260px',
          height: '530px',
          border: '1px solid black',
          backgroundImage: `url(${LoadingImage.src})`, // ここに背景画像を設定
          backgroundSize: 'cover', // 画像がコンテナ全体にカバーされるように設定
          backgroundPosition: 'center',
          zIndex: 0,
          borderRadius: '20px', 
          overflow: 'hidden', 
        }}
      >
        <iframe
          src={link}
          width="100%"
          height="100%"
          style={{ border: 'none', overflow: 'hidden' }}
          sandbox="allow-scripts allow-same-origin"
          scrolling="no"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{
          position: 'fixed',
          right: '20px',
          top: '80px',
          width: '260px',
          height: '530px',
          border: '1px solid black',
          backgroundImage: `url(${LoadingImage.src})`, // ここに背景画像を設定
          backgroundSize: 'cover', // 画像がコンテナ全体にカバーされるように設定
          backgroundPosition: 'center',
          zIndex: 0,
          borderRadius: '20px', 
          overflow: 'hidden', 
        }}
      >
        <iframe
          src={link}
          width="100%"
          height="100%"
          style={{ border: 'none', overflow: 'hidden' }}
          sandbox="allow-scripts allow-same-origin"
          scrolling="no"
        />
      </motion.div>
    </>
  );
};

export default memo(PreviewCard);