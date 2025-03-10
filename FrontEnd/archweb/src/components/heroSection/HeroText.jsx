import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl font-bold uppercase text-orange"
      >
        About us
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md: text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange"
      >
        Architecture Company
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-xl font-bold  mt-4 text-orange border-white"
      >
        We are an architecture company based in Mongolia, <br />
        dedicated to designing innovative and sustainable spaces <br />
        that blend modern functionality with cultural heritage.
        <br />
      </motion.p>
    </div>
  );
};

export default HeroText;
