import React from 'react';
import { motion } from 'framer-motion';

import { PreviewCardProps } from '../../types/types_index'

const PreviewCard: React.FC<PreviewCardProps> = ({ title, link }) => {
  const handleIframeLoad = () => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      setTimeout(() => {
        iframe.contentWindow?.scrollTo(0, 90); // スクロール位置を調整
      }, 100);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed',
          left: '2%',
          bottom: '20%',
          width: '24%',
          height: '35%',
          border: '1px solid black',
          backgroundColor: 'white',
          zIndex: 0,
        }}
      >
        <iframe
          src={link}
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          sandbox="allow-scripts allow-same-origin"
          onLoad={handleIframeLoad}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed',
          right: '2%',
          bottom: '20%',
          width: '24%',
          height: '35%',
          border: '1px solid black',
          backgroundColor: 'white',
          zIndex: 0,
        }}
      >
        <iframe
          src={link}
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          sandbox="allow-scripts allow-same-origin"
          onLoad={handleIframeLoad}
        />
      </motion.div>
    </>
  );
};

export default PreviewCard;