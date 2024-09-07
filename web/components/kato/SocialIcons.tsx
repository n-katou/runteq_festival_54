import { memo } from "react";
import Social from '../../components/kato/Social';

const SocialIcons: React.FC = () => {
  return (
    <div className="mt-8 flex flex-col xl:flex-row items-center gap-8">
      <Social
        containerStyles="flex gap-2 sm:gap-6 overflow-x-auto"
        iconStyles="w-10 h-10 sm:w-12 sm:h-12 border border-green rounded-full flex justify-center items-center text-white text-base bg-green hover:bg-darkGreen hover:text-white transition-all duration-500 text-4xl"
      />
    </div>
  );
};

export default memo(SocialIcons);
