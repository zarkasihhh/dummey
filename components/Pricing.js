import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Select Your Cooking Class
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Choose the class that suits your skills and join us to cook, learn, and have fun!
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/Premium.png"
                    width={145}
                    height={165}
                    alt="Basic Cooking Class"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Basic Cooking Class
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">Learn 5 Essential Recipes</li>
                  <li className="relative check custom-list my-2">Beginner-Friendly Techniques</li>
                  <li className="relative check custom-list my-2">Access to Online Cooking Community</li>
                  <li className="relative check custom-list my-2">Hands-on Guidance from Experts</li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4">
                    $50 <span className="text-black-500">/ class</span>
                  </p>
                  <ButtonOutline>Sign Up</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/Premium.png"
                    width={145}
                    height={165}
                    alt="Intermediate Cooking Class"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Intermediate Cooking Class
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">Learn 10 Advanced Recipes</li>
                  <li className="relative check custom-list my-2">Intermediate Techniques</li>
                  <li className="relative check custom-list my-2">Live Q&A with Professional Chefs</li>
                  <li className="relative check custom-list my-2">Interactive Cooking Demos</li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4">
                    $100 <span className="text-black-500">/ class</span>
                  </p>
                  <ButtonOutline>Sign Up</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/Premium.png"
                    width={145}
                    height={165}
                    alt="Advanced Cooking Class"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Advanced Cooking Class
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">Master 15 Gourmet Recipes</li>
                  <li className="relative check custom-list my-2">Advanced Culinary Techniques</li>
                  <li className="relative check custom-list my-2">One-on-One Session with a Chef</li>
                  <li className="relative check custom-list my-2">Certificate of Completion</li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4">
                    $150 <span className="text-black-500">/ class</span>
                  </p>
                  <ButtonOutline>Sign Up</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto"
            >
              Join Our Global Cooking Community
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              Connect with fellow chefs and enthusiasts from around the world. Join us and make cooking fun and easy!
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="py-12 w-full px-8 mt-16" variants={scrollAnimation}>
              <Maps className="w-full h-auto" />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap" variants={scrollAnimation}>
              <img
                src="/assets/Icon/blueband.png"
                className="h-14 w-auto mt-4 lg:mt-2"
                alt="Chefs Club"
              />
              <img
                src="/assets/Icon/cuisinart.png"
                className="h-14 w-auto mt-2 lg:mt-0"
                alt="Cooking Show"
              />
              <img
                src="/assets/Icon/abc.svg"
                className="h-12 w-auto mt-2 lg:mt-0"
                alt="Food Network"
              />
              <img
                src="/assets/Icon/starbucks.png"
                className="h-14 w-auto mt-2 lg:mt-0"
                alt="MasterChef"
              />
              <img
                src="/assets/Icon/masterchef.png"
                className="h-12 w-auto mt-2 lg:mt-0"
                alt="Culinary School"
              />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="flex flex-col w-full">
          <Testimoni />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
