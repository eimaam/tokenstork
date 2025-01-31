"use client";

import React from "react";
import tokenIds from "../utils/tokenIds";
import TinyLoader from "./TinyLoader";
import { useBCHPrice } from "../providers/bchpriceclientprovider";
import { useState, useEffect } from "react";

const InfoCard = ({ title, value, icon, gradient }: { title: string; value: React.ReactNode; icon: string; gradient: string }) => (
  <div className={`relative h-[100px] overflow-hidden backdrop-blur-sm bg-opacity-20 p-3 md:p-4 rounded-2xl ${gradient} transition-all duration-300 hover:scale-105 hover:shadow-2xl group`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10 flex items-center justify-between">
      <div className="text-white grid grid-rows-2">
        <p className="text-sm capitalize tracking-wider font-medium opacity-80">{title}</p>
        <h3 className="text-lg md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">{value}</h3>
      </div>
      <div className="hidden md:block text-white text-xl bg-white/10 rounded-full backdrop-blur-sm">{icon}</div>
    </div>
    <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-white/5 to-transparent rounded-full transform rotate-45 transition-transform group-hover:scale-150 duration-700"></div>
  </div>
);

const InfoCards: React.FC = () => {
  const { bchPrice } = useBCHPrice();
  const [fearGreedIndex, setFearGreedIndex] = useState<number | null>(null);

  useEffect(() => {
    async function getFGI() {
      try {
        const response = await fetch("/api/fearAndGreed");
        const data = await response.json();
        setFearGreedIndex(data.fgi.now.value);
      } catch (error) {
        console.error("Error fetching Fear & Greed Index:", error);
      }
    }
    getFGI();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-1 md:gap-6 mb-8">
      <InfoCard
        title="Tokens Tracked"
        value={tokenIds.length}
        icon="🔍"
        gradient="bg-gradient-to-br from-blue-600/90 to-blue-800/90"
      />
      <InfoCard
        title="BCH Price"
        value={bchPrice ? `$${bchPrice.toFixed(2)}` : <TinyLoader />}
        icon="💰"
        gradient="bg-gradient-to-br from-green-600/90 to-green-800/90"
      />
      <InfoCard
        title="Fear & Greed Index"
        value={fearGreedIndex || <TinyLoader />}
        icon="📊"
        gradient="bg-gradient-to-br from-purple-600/90 to-purple-800/90"
      />
    </div>
  );
};

export default InfoCards;