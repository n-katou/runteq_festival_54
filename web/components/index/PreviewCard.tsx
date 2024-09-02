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
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{
          position: 'fixed',
          left: '30px',
          bottom: '80px',
          width: '260px',
          height: '530px',
          border: '1px solid black',
          backgroundColor: 'white',
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
          right: '30px',
          bottom: '80px',
          width: '260px',
          height: '530px',
          border: '1px solid black',
          backgroundColor: 'white',
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

export default PreviewCard;