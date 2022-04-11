import React from "react";
import Link from "next/link";
import { navigators } from "./Header";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { sidebar, slider } from "../../utils/animation";
interface Props {
  visibility: Boolean;
  setVisibility: Function;
}
const Slider: React.FC<Props> = ({ visibility, setVisibility }) => {
  const router = useRouter();

  const closeSlider = () => {
    setVisibility(false);
  };

  return (
    <>
      <AnimatePresence>
        {visibility && (
          <motion.div className="absolute z-[90] w-screen h-screen  overflow-hidden select-none">
            <motion.div
              variants={slider}
              initial="hidden"
              animate="show"
              exit="out"
              className=" grid grid-cols-12 bg-[#6e6e6e]/30 md:hidden overflow-hidden"
              id="slider"
            >
              <motion.div
                variants={sidebar}
                className="w-full h-screen bg-[#f1f1f1] col-span-6"
              >
                <div className="flex flex-col items-center justify-center w-full h-full">
                  <motion.div
                    key="slider"
                    className="flex flex-col items-center w-[80%] gap-4"
                    initial={{
                      x: "100vw",
                    }}
                    animate={{
                      x: 0,
                      transition: {
                        type: "spring",
                        stiffness: 50,
                        delay: 0.3,
                      },
                    }}
                  >
                    <Link href="/">
                      <a
                        className="flex items-center gap-2"
                        onClick={closeSlider}
                      >
                        <img
                          className="w-10 h-10 object-contain"
                          src="/assests/img/logo.svg"
                          alt=""
                        />
                        <p className="text-[1.2rem] font-semibold text-[#444]">
                          چمدون
                        </p>
                      </a>
                    </Link>
                    <div className="flex flex-col gap-4  w-full p-2 dir">
                      {navigators.map((navigator, index) => (
                        <Link key={index} href={navigator.path}>
                          <motion.a
                            onClick={closeSlider}
                            initial={{
                              x: "100vw",
                            }}
                            animate={{
                              x: 0,
                              transition: {
                                duration: 0.5,
                                delay: 0.1 * index,
                                type: "tween",
                              },
                            }}
                            className={
                              router.pathname === navigator.path
                                ? "bg-gradient-to-tl from-[#0094ff] to-[#87ccfd] text-[#f1f1f1] p-2 rounded-md shadow-md cursor-pointer"
                                : "bg-gradient-to-tl p-2 rounded-md hover:from-[#e2e2e2] hover:to-[#ccc] transition ease-in-out duration-200 bg-transparent hover:text-[#313131]  cursor-pointer"
                            }
                          >
                            {navigator.title}
                          </motion.a>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              <div className="col-span-6" onClick={closeSlider} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Slider;
