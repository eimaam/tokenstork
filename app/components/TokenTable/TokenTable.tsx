"use client";

import React from "react";
import { TokenData } from "@/app/interfaces";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import Image from "next/image";
import { humanizeBigNumber, formatMarketCap, getIPFSUrl } from "@/app/utils/presentationUtils";
import FormatCategory from "@/app/components/FormatCategory";
import { InfoCircleOutlined } from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";

const tableVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const rowVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 }
};

type SortState = {
  column: string;
  direction: "asc" | "desc";
};

interface TokenTableProps {
  tokenData: TokenData[];
  sortState: SortState;
  onSort: (column: string) => void;
}

const TokenTable: React.FC<TokenTableProps> = ({ tokenData }) => {
  const columns: ColumnsType<TokenData> = [
    {
      title: "Token Name",
      dataIndex: "name",
      key: "name",
      fixed: "left",
      width: 200,
      render: (text, token) => (
        <div className="flex items-center gap-2">
          <Image
            src={getIPFSUrl(token.icon)}
            alt={text}
            width={32}
            height={32}
            className="rounded-full"
            title={token.description}
          />
          <span className="font-semibold" title={token.description}>
            {text.length > 22 ? text.substr(0, 22) + "..." : text}
          </span>
        </div>
      ),
    },
    {
      title: () => (
        <span>
          Ticker <InfoCircleOutlined title="Token metadata subject to change" />
        </span>
      ),
      dataIndex: "symbol",
      key: "symbol",
    },
    {
      title: () => (
        <span>
          Price ($) <InfoCircleOutlined title="Prices are highly speculative" />
        </span>
      ),
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
      align: "right",
      render: (price) =>
        price === 0
          ? "-"
          : price >= 1
          ? "$" + price.toFixed(2)
          : "$" + price.toFixed(6),
    },
    {
      title: () => (
        <span>
          Circulating Supply <InfoCircleOutlined title="The supply present at the authbase" />
        </span>
      ),
      dataIndex: "circulatingSupply",
      key: "circulatingSupply",
      align: "right",
      render: (supply) => humanizeBigNumber(Number(supply)),
    },
    {
      title: () => (
        <span>
          Max Supply <InfoCircleOutlined title="Max supply is always fixed at genesis" />
        </span>
      ),
      dataIndex: "maxSupply",
      key: "maxSupply",
      align: "right",
      render: (supply) => humanizeBigNumber(Number(supply)),
    },
    {
      title: () => (
        <span>
          Market Cap ($) <InfoCircleOutlined title="Market caps are highly speculative" />
        </span>
      ),
      dataIndex: "marketCapBigInt",
      key: "marketCapBigInt",
      sorter: (a, b) => Number(a.marketCapBigInt) - Number(b.marketCapBigInt),
      align: "right",
      render: (_, token) => formatMarketCap(token.marketCap),
    },
    {
      title: () => (
        <span>
          TVL ($) <InfoCircleOutlined title="Total Value Locked" />
        </span>
      ),
      dataIndex: "tvl",
      key: "tvl",
      sorter: (a, b) => Number(a.tvl) - Number(b.tvl),
      align: "right",
      render: (tvl) =>
        Number(tvl) === 0
          ? "-"
          : Number(tvl) >= 1000
          ? "$" +
            Number(tvl).toLocaleString("en-US", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })
          : "$" + Number(tvl).toFixed(0),
    },
    {
      title: () => (
        <span>
          Token Category <InfoCircleOutlined title="Sometimes referred to as TokenID" />
        </span>
      ),
      dataIndex: "category",
      key: "category",
      align: "right",
      render: (category) => <FormatCategory category={category} />,
    },
  ];

  return (
    <motion.div
      variants={tableVariants}
      initial="initial"
      animate="animate"
      className="overflow-x-auto"
    >
      <Table
        columns={columns}
        dataSource={tokenData}
        rowKey="name"
        scroll={{ x: 1500 }}
        className="mt-6"
        pagination={false}
        rowClassName="hover:bg-gradient-to-r from-violet-600/20 to-indigo-600/10 transition-colors duration-200"
      />
    </motion.div>
  );
};

export default TokenTable;