import React from "react";
import Image from "next/image";

function Logo() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* 1つ目のロゴ */}
      <div className="w-32 sm:w-44 md:w-56 lg:w-64">
        <Image
          src="/about/Runteq_Festival_54.png"
          alt="Runteq Festival 54"
          width={800}
          height={800}
          layout="responsive"
          priority
        />
      </div>

      {/* 2つ目のロゴ */}
      <div className="w-60 sm:w-72 md:w-80 lg:w-96">
        <Image
          src="/about/about.png"
          alt="ABOUT"
          width={1000}
          height={1000}
          layout="responsive"
          priority
        />
      </div>
    </div>
  );
}

export default Logo;
