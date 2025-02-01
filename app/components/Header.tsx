import React from 'react'
import InfoCards from './InfoCards'
import { motion } from "framer-motion";

const headerVariants = {
  initial: { y: -20, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Header = () => {
  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className="..."
    >
      <InfoCards />
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl md:text-3xl font-extrabold mb-4"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-accent from-primary">
          Today&apos;s BCH CashTokens Prices
        </span>
      </motion.h1>
    </motion.header>
  )
}

export default Header