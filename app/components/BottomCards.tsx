import Image from "next/image";
import { motion } from "framer-motion";

const cardVariants = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  hover: { 
    scale: 1.02,
    transition: {
      duration: 0.2
    }
  }
};

const BottomCards = () => {
  const cards = [
    {
      href: "https://x.com/BitcoinCashSite",
      imgSrc: "/socials/twitter.png",
      imgAlt: "@BitcoinCashSite",
      imgClass: "object-cover object-center rounded-full h-36 w-36 mx-auto mt-10 bg-white border border-primary",
      title: "Follow @BitcoinCashSite",
      description: "Follow @BitcoinCashSite on 𝕏 to stay up-to-date with the BCH and CashTokens space!",
      buttonText: "Follow @BitcoinCashSite",
      buttonHref: "https://x.com/BitcoinCashSite"
    },
    {
      href: "https://reddit.com/r/BCHCashTokens",
      imgSrc: "/socials/reddit.png",
      imgAlt: "r/BCHCashTokens",
      imgClass: "object-cover object-center rounded-full h-36 w-36 mx-auto mt-10 border border-accent",
      title: "Subscribe to r/BCHCashTokens",
      description: "Subscribe to r/BCHCashTokens to stay up-to-date with the BCH and CashTokens space!",
      buttonText: "Subscribe to r/BCHCashTokens",
      buttonHref: "https://reddit.com/r/BCHCashTokens"
    },
    {
      title: "Magnitude Abbreviations",
      description: "For the token supply numbers.",
      content: (
        <div className="grid grid-cols-3 gap-4">
          <div className="text-textcolor col-span-1">1 (no abbr.)</div>
          <div className="font-mono col-span-2">1</div>
          <div className="text-textcolor col-span-1">Thousand (K)</div>
          <div className="font-mono col-span-2">1K = 1,000</div>
          <div className="text-textcolor col-span-1">Million (M)</div>
          <div className="font-mono col-span-2">1M = 1,000,000</div>
          <div className="text-textcolor col-span-1">Billion (B)</div>
          <div className="font-mono col-span-2">1B = 1,000,000,000</div>
          <div className="text-textcolor col-span-1">Trillion (T)</div>
          <div className="font-mono col-span-2">1T = 1,000,000,000,000</div>
          <div className="text-textcolor col-span-1">Quadrillion (P)</div>
          <div className="font-mono col-span-2">1P = 1,000,000,000,000,000</div>
          <div className="text-textcolor col-span-1">Quintillion (E)</div>
          <div className="font-mono col-span-2 whitespace-pre-wrap break-all">
            1E = 1,000,000,000,000,000,000
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="dark:text-textcolor grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          transition={{ delay: index * 0.1 }}
          className="transform transition duration-500 hover:scale-105 bg-secondary shadow-lg rounded-lg overflow-hidden my-10 p-6"
        >
          {card.href && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={card.href}
              className="block relative"
            >
              <Image
                src={card.imgSrc}
                alt={card.imgAlt}
                className={card.imgClass}
                height={36}
                width={36}
              />
            </a>
          )}
          <h3 className="py-2 w-3/4 text-textcolor text-xl font-semibold tracking-wide uppercase mx-auto text-center my-4">
            {card.title}
          </h3>
          <p className="px-6 mx-auto text-center">{card.description}</p>
          {card.buttonText && (
            <p className="mt-8 mb-6 mx-auto text-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={card.buttonHref}
                className="px-5 py-2.5 font-medium bg-primary hover:bg-accent !text-white rounded-lg text-sm no-underline"
              >
                {card.buttonText}
              </a>
            </p>
          )}
          {card.content}
          <p className="text-xs text-center mb-4">
            Your ad here. <a href="mailto:hello@panmoni.com">hello@panmoni.com</a>
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default BottomCards;
