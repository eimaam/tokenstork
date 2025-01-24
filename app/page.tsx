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

import { Table, Tooltip, Typography, Card, Statistic, Space, Tag } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { ColumnType } from "antd/es/table";
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

    const expire_time = 86400000
    let expiry;
    expiry = localStorage.getItem("token_data_cache") || "";
    if ( expiry == "" || ( parseInt(expiry) - Date.now() ) < 0 )
    {
	localStorage.clear();
	localStorage.setItem( "token_data_cache", String( (Date.now() + expire_time) ) );
    }

        const dataPromises = tokenIds.map(async (category) => {
          try {
            return await getTokenData(category, fixedPrice);
          } catch (e) {
            return Promise.resolve(null);
          }
        });
        const results = await Promise.all(dataPromises);
        const allTokenData: TokenData[] = results.flat().filter((d): d is TokenData => d !== null);
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

  if (loading) {
    return (
      <>
        <TokenSkeleton />
        <BottomCards />
      </>
    );
  }

  if (tokenData.length === 0) {
    return <p>No token data available.</p>;
  }

  const columns = [
    {
      title: 'Token Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, token) => (
        <Space>
          <Image
            src={getIPFSUrl(token.icon)}
            alt={token.name}
            width={32}
            height={32}
            className="rounded-full"
            title={token.description}
          />
          <Tooltip title={token.description}>
            <Typography.Text strong>
              {token.name.length > 22 ? token.name.substr(0, 22) + '...' : token.name}
            </Typography.Text>
          </Tooltip>
        </Space>
      ),
    },
    {
      title: (
        <Space>
          Ticker
          <Tooltip title="Token metadata subject to change">
            <InfoCircleOutlined />
          </Tooltip>
        </Space>
      ),
      dataIndex: 'symbol',
      key: 'symbol',
    },
    {
      title: (
        <Space>
          Price ($)
          <Tooltip title="Prices are highly speculative">
            <InfoCircleOutlined />
          </Tooltip>
        </Space>
      ),
      dataIndex: 'price',
      key: 'price',
      sorter: true,
      align: 'right',
      render: (price:number) =>
        price === 0
          ? '-'
          : price >= 1
          ? `$${price.toFixed(2)}`
          : `$${price.toFixed(6)}`,
    },
    {
      title: (
        <Space>
          Circulating Supply
          <Tooltip title="The supply present at the authbase">
            <InfoCircleOutlined />
          </Tooltip>
        </Space>
      ),
      dataIndex: 'circulatingSupply',
      key: 'circulatingSupply',
      align: 'right',
      render: (supply:number) => humanizeBigNumber(Number(supply)),
    },
    {
      title: (
        <Space>
          Max Supply
          <Tooltip title="Max supply is always fixed at genesis">
            <InfoCircleOutlined />
          </Tooltip>
        </Space>
      ),
      dataIndex: 'maxSupply',
      key: 'maxSupply',
      align: 'right',
      render: (supply:number) => humanizeBigNumber(Number(supply)),
    },
    {
      title: (
        <Space>
          Market Cap ($)
          <Tooltip title="Market caps are highly speculative">
            <InfoCircleOutlined />
          </Tooltip>
        </Space>
      ),
      dataIndex: 'marketCapBigInt',
      key: 'marketCapBigInt',
      sorter: true,
      align: 'right',
      render: (_, token) => formatMarketCap(token.marketCap),
    },
    {
      title: (
        <Space>
          TVL ($)
          <Tooltip title="Total Value Locked">
            <InfoCircleOutlined />
          </Tooltip>
        </Space>
      ),
      dataIndex: 'tvl',
      key: 'tvl',
      sorter: true,
      align: 'right',
      render: (tvl:number) =>
        Number(tvl) === 0
          ? '-'
          : Number(tvl) >= 1000
          ? `$${Number(tvl).toLocaleString('en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}`
          : `$${Number(tvl).toFixed(0)}`,
    },
    {
      title: (
        <Space>
          Token Category
          <Tooltip title="Sometimes referred to as TokenID">
            <InfoCircleOutlined />
          </Tooltip>
        </Space>
      ),
      dataIndex: 'category',
      key: 'category',
      align: 'right',
      render: (category) => <FormatCategory category={category} />,
    },
  ];

  const handleTableChange = (pagination, filters, sorter) => {
    setSortState({
      column: sorter.field || 'tvl',
      direction: sorter.order === 'ascend' ? 'asc' : 'desc',
    });
  };

  return (
    <main className="p-4 lg:p-8 bg-white dark:bg-gray-900">
      <Card className="shadow-sm">
        <Typography.Title level={2} className="mb-6">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Today&apos;s BCH CashTokens Prices
          </span>
        </Typography.Title>

        <Table
          columns={columns as ColumnType<TokenData>[]}
          dataSource={sortedData}
          rowKey="name"
          loading={loading}
          onChange={handleTableChange}
          pagination={{
            position: ['bottomCenter'],
            showSizeChanger: true,
            showQuickJumper: true,
            defaultPageSize: 10,
            pageSizeOptions: ['10', '20', '50', '100'],
          }}
          scroll={{ x: true }}
          // className="crypto-table"
        />

        <BottomCards />
      </Card>
    </main>
  );
}
