import { Card, Table, Space, Typography } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { ColumnType } from "antd/es/table";
import InfoCards from "./InfoCards";

const TokenSkeleton = () => {
  // Generate dummy data for the skeleton
  const skeletonData = Array(10).fill(null).map((_, index) => ({
    key: index,
    name: "",
    symbol: "",
    price: "",
    circulatingSupply: "",
    maxSupply: "",
    marketCap: "",
    tvl: "",
    category: ""
  }));

  const columns = [
    {
      title: "Token Name",
      dataIndex: "name",
      key: "name",
      render: () => (
        <Space>
          <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="w-32 h-6 bg-gray-200 rounded animate-pulse"></div>
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
      dataIndex: "symbol",
      key: "symbol",
      render: () => <div className="w-16 h-6 bg-gray-200 rounded animate-pulse"></div>,
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
      dataIndex: "price",
      key: "price",
      align: "right",
      render: () => <div className="w-20 h-6 bg-gray-200 rounded animate-pulse ml-auto"></div>,
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
      dataIndex: "circulatingSupply",
      key: "circulatingSupply",
      align: "right",
      render: () => <div className="w-24 h-6 bg-gray-200 rounded animate-pulse ml-auto"></div>,
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
      dataIndex: "maxSupply",
      key: "maxSupply",
      align: "right",
      render: () => <div className="w-24 h-6 bg-gray-200 rounded animate-pulse ml-auto"></div>,
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
      dataIndex: "marketCap",
      key: "marketCap",
      align: "right",
      render: () => <div className="w-28 h-6 bg-gray-200 rounded animate-pulse ml-auto"></div>,
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
      dataIndex: "tvl",
      key: "tvl",
      align: "right",
      render: () => <div className="w-24 h-6 bg-gray-200 rounded animate-pulse ml-auto"></div>,
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
      dataIndex: "category",
      key: "category",
      align: "right",
      render: () => <div className="w-20 h-6 bg-gray-200 rounded animate-pulse ml-auto"></div>,
    },
  ];

  return (
    <main className="">
      
      <Card className="shadow-sm !rounded-none">
        

        <Table
          columns={columns as ColumnType<any>[]}
          dataSource={skeletonData}
          pagination={false}
          scroll={{ x: true }}
        />
      </Card>
    </main>
  );
};

export default TokenSkeleton;
