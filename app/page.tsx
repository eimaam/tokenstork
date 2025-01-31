"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import tokenIds from "@/app/utils/tokenIds.js";
import { getTokenData } from "@/app/utils/getTokenData";
import {
  humanizeBigNumber,
  formatMarketCap,
  getIPFSUrl,
} from "@/app/utils/presentationUtils";

import { TokenData } from "@/app/interfaces";
import { useBCHPrice } from "@/app/providers/bchpriceclientprovider";

import TokenSkeleton from "@/app/components/TokenSkeleton";
import FormatCategory from "@/app/components/FormatCategory";
import BottomCards from "@/app/components/BottomCards";
import InfoCards from "@/app/components/InfoCards";

import TokenTable from "@/app/components/TokenTable/TokenTable";
import Header from "./components/Header";


// TODO: explore search example from https://github.com/vercel/nextjs-postgres-nextauth-tailwindcss-template/tree/main
// TODO: should this be all server and zero client?
// TODO: does the new UI work via proxy?
// TODO: add tabs on this and add a tab for NFTs.

type SortState = {
  column: string;
  direction: "asc" | "desc";
};

export default function TokenDataPage() {
  const [tokenData, setTokenData] = useState<TokenData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [sortState, setSortState] = useState<SortState>({
    column: "tvl",
    direction: "desc",
  });
  const { bchPrice } = useBCHPrice();
  const updateInterval = 300000; // milliseconds

  const sortData = (data: TokenData[], { column, direction }: SortState) => {
    return [...data].sort((a, b) => {
      if (a[column] < b[column]) {
        return direction === "asc" ? -1 : 1;
      }
      if (a[column] > b[column]) {
        return direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  };

  const onSort = (column: string) => {
    const isAsc = sortState.column === column && sortState.direction === "asc";
    setSortState({
      column,
      direction: isAsc ? "desc" : "asc",
    });
  };

  const sortedData = sortData(tokenData, sortState);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    async function fetchData() {
      setLoading(true);
      try {
        if (bchPrice === null) {
          throw new Error("BCH price is not available");
        }
        const fixedPrice = parseFloat(bchPrice.toFixed(2));

        const expire_time = 86400000;
        let expiry;
        expiry = localStorage.getItem("token_data_cache") || "";
        if (expiry == "" || parseInt(expiry) - Date.now() < 0) {
          localStorage.clear();
          localStorage.setItem(
            "token_data_cache",
            String(Date.now() + expire_time)
          );
        }

        const dataPromises = tokenIds.map(async (category) => {
          try {
            return await getTokenData(category, fixedPrice);
          } catch (e) {
            return Promise.resolve(null);
          }
        });
        const results = await Promise.all(dataPromises);
        const allTokenData: TokenData[] = results
          .flat()
          .filter((d): d is TokenData => d !== null);
        setTokenData(allTokenData);
      } catch (error) {
        if (error instanceof Error) {
          setError(`Error fetching token data: ${error.message}`);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    }

    if (bchPrice !== null) {
      fetchData();
      intervalId = setInterval(fetchData, updateInterval);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [bchPrice]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  // if (tokenData.length === 0) {
  //   return <p>No token data available.</p>;
  // }


  return (
    <main className="px-1 sm:px-2 lg:px-4 text-lg">
      <Header />
      {loading ? (
        <TokenSkeleton />
      ) : (
          <TokenTable tokenData={tokenData} sortState={sortState} onSort={onSort} />
      )}
      <BottomCards />
    </main>
  );
}
