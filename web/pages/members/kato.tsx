import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BackgroundVideo from '../../components/kato//BackgroundVideo';
import MainContent from '../../components/kato//MainContent';
import AppsList from '../../components/kato/AppsList';
import SpotlightTransition from '../../components/kato/SpotlightTransition';
import GoHomeButton from '../../components/GoHomeButton';

const KatoPage: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  const handleTransitionComplete = () => {
    setShowContent(true);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex flex-col justify-between"
    >
      {!showContent && <SpotlightTransition onComplete={handleTransitionComplete} />}

      {showContent && (
        <>
          <BackgroundVideo />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 flex flex-col items-center justify-center flex-grow"
          >
            <MainContent />
            <AppsList />
          </motion.div>
          <GoHomeButton />
        </>
      )}
    </motion.section>
  );
};

export default KatoPage;
