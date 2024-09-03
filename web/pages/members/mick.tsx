import Head from "next/head";
import Curve from "../../public/transition/index";
import MickImg from "../../public/mick/mickpic.png";
import Image from 'next/image';
import styles1 from '../../styles/mick/mick1.module.css';
import styles2 from '../../styles/mick/mick2.module.css'
import Cards from "../../components/mick/Card";

import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import Modal from "../../components/mick/Modal";
import { IoShareSocialOutline } from "react-icons/io5";
import Social from "../../components/mick/Social";



export default function Mick() {
  // Curveアニメーションを管理するためのstate
  const [isCurveComplete, setIsCurveComplete] = useState<boolean>(false);

  useEffect(() => {
    // ここでCurveの完了を監視し、完了したらtrueとする
    const timer = setTimeout(() => {
      setIsCurveComplete(true);
    }, 1000); // 1秒後に表示
    return () => clearTimeout(timer); // 終わったらクリア
  }, []);

  const [open, setOpen] = useState(false)

  return (
    <>
      <Curve>
        <></>
      </Curve>
      <div className="min-h-[550px] sm:min-h-[600px] bg-pink flex justify-center items-center text-white">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content */}
            <div className="order-2 sm:order-1 flex flex-col justify-center gap-6 sm:text-center">
              <motion.h1
                className="text-3xl"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.75,
                }}
              >
                My name is Mick!<br/>
                I am office worker
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 1.35,
                }}
              >
                <button className="bg-gradient-to-r from-pink to-blue border-2 border-pink rounded-full px-4 py-2 text-white hover:scale-110 duration-200 mb-5"
                onClick={() => setOpen(true)}
                >
                Click Here!
                </button>
                <Modal open={open} onClose={() => setOpen(false)}>
                  <div className="text-center w-56">
                    <IoShareSocialOutline size={56} style={{ color: 'pink' }} className="mx-auto text-red-500"/>
                    <div className="mx-auto my-4 w-48">
                      <h3 className="text-lg font-black text-gray-400">My SNS</h3>
                      <p className="text-sm text-gray-300">
                      My social media links! Please check them out!
                      </p>
                      <Social
                        containerStyles="flex gap-6"
                        iconStyles="w-12 h-8 border border-green rounded-full flex justify-center items-center text-white text-base bg-green hover:bg-darkGreen hover:text-white transition-all duration-500 text-5xl"
                      />
                    </div>
                    <div className="flex gap-4">
                      <button
                        className="btn btn-light w-full bg-blue"
                        onClick={() => setOpen(false)}
                      >

                        back
                      </button>
                    </div>
                  </div>
                </Modal>
              </motion.div>
            </div>
            {/* image */}
            <motion.div
              className="min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: 1.65,
              }}
            >
            <Image
                src={MickImg}
                alt="Mick"
                className={`w-[300px] sm:scale-10 mx-auto ${styles1.spin}`}
              />
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.95,
        }}
      >
        <Cards/>
      </motion.div>
    </>
  );
}
