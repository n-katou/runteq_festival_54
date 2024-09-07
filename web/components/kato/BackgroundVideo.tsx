import { memo } from "react";

const BackgroundVideo: React.FC = () => {
  return (
    <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
      <source src="/kato/back.mp4" type="video/mp4" />
    </video>
  );
};

export default memo(BackgroundVideo);
