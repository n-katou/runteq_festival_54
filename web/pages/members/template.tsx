//import motion
import {motion} from 'framer-motion'
//componets
import Social from "/components/template/parts/Social.tsx";
import MyImg from "@/components/template/parts/MyImg";


const Template = () => {
  return (
    <div className="h-[80vh] xl:h-screen relative">
      <div className="absolute w-full h-full z-10 bg-blue/[0.86]"/>
      <section className="relative z-20 py-12 xl:py-24 h-[84] xl:pt-28">
        <div className="container mx-auto">
          <div className="flex justify-between gap-x-8">
            <section>
              <div className="text-orange max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                <h2 className="text-8xl">
                  Hello<br/>
                  I'm yamada taro</h2>
                <div className="text-2xl">My hobby is ...</div>
                <div className="text-2xl">My Vision as a Future Engineer ...</div>
                <div className="text-xl">こんにちは。エンジニアとして、問題解決と革新的なソリューション提供に情熱を持っています。継続的な学習を大切にし、チームと協力して高品質なソフトウェアを開発しています。技術とコミュニケーションの両方を駆使し、ユーザーの期待を超える成果を目指しています。よろしくお願いします。</div>
                <br/>
                <div className="flex flex-col xl:flex-row items-center gap-8">
                  <Social
                      containerStyles="flex gap-6 "
                      iconStyles="w-10 h-10 border border-green rounded-full flex justify-center items-center text-white text-base bg-green hover:bg-darkGreen hover:text-white hover:transition-all duration-500"
                    />
                  </div>
              </div>
            </section>
            <section>
            <div className="hidden xl:flex relative">
              <div className="bg-shape-light w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-1 z-0"></div>
              <MyImg
                containerStyles="bg-shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
                imgSrc='/template/template.png'
              />
            </div>
            </section>
          </div>
        </div>
      </section>
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/template/strawberry.mp4" type="video/mp4" />
      </video>
      </div>
  );
};

export default Template
