import React, { memo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { PreviewCardProps } from '../../types/types_index';
import { useDelayedPreview } from '../../hooks/hooks_index'

import LoadingImage from '../../public/index/loading.png';

const PreviewCard: React.FC<PreviewCardProps> = ({ title, link }) => {
  const showPreview = useDelayedPreview(2000);

  return (
    <>
      {showPreview ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.3}}
            style={{
              position: 'fixed',
              left: '12px',
              top: '145px',
              width: '260px',
              height: '530px',
              border: '1px solid black',
              backgroundImage: `url(${LoadingImage.src})`,
              backgroundSize: 'cover', // 画像がコンテナ全体にカバーされるように設定
              backgroundPosition: 'center',
              zIndex: 10,
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
            transition={{ duration: 1, delay: 0.3 }}
            style={{
              position: 'fixed',
              right: '12px',
              top: '145px',
              width: '260px',
              height: '530px',
              border: '1px solid black',
              backgroundImage: `url(${LoadingImage.src})`,
              backgroundSize: 'cover', // 画像がコンテナ全体にカバーされるように設定
              backgroundPosition: 'center',
              zIndex: 10,
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

      ) : (

        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
            style={{
              position: 'fixed',
              left: '12px',
              top: '145px',
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
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
            style={{
              position: 'fixed',
              right: '12px',
              top: '145px',
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
          />
        </>

      )}
    </>
  );
};

export default memo(PreviewCard);