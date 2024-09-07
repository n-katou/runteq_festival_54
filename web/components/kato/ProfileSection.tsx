import { memo } from "react";
import { motion, useMotionValue, useTransform } from 'framer-motion';
import MyImg from '../../components/kato/MyImg';

const ProfileSection: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <motion.div className="relative mt-8 lg:mt-0">
      <div style={{ perspective: 2000 }}>
        <motion.div
          style={{ x, y, rotateX, rotateY, z: 100 }}
          drag
          dragElastic={0.18}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: 'grabbing' }}
          className="backdrop-blur-lg p-4 sm:p-8 rounded-lg shadow-lg relative cursor-grab"
        >
          <div className="absolute top-2 right-2 bg-darkGreen/50 text-white p-2 rounded-full shadow-md">
            <span className="text-sm">Drag</span>
          </div>

          <div
            className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-no-repeat absolute -top-1 -right-1 z-0 hidden sm:block"
            style={{ backgroundImage: `url('/kato/shape-light.svg')` }}
          />
          <MyImg
            containerStyles="w-[310px] h-[272px] sm:w-[410px] sm:h-[362px] lg:w-[510px] lg:h-[462px] bg-no-repeat relative bg-bottom rounded-lg overflow-hidden shadow-lg"
            imgSrc="/kato/profile.png"
            style={{
              backgroundImage: `url('/kato/shape-1.svg')`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              display: 'block',
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default memo(ProfileSection);
