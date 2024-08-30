import React from 'react';
import { motion } from 'framer-motion';

import { PreviewCardProps } from '../../types/types_index'

const PreviewCard: React.FC<PreviewCardProps> = ({ title, link }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed',
          left: '37px',
          bottom: '145px',
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
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed',
          right: '37px',
          bottom: '145px',
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
        />
      </motion.div>
    </>
  );
};

export default PreviewCard;