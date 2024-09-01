import { useEffect, useState, useTransition } from "react";
import { Row, Col, Card, Select, Skeleton } from "antd";

import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import NewsCard from "./NewsCard";

const { Option } = Select;

const News = ({ simplefied }) => {
  const count = simplefied ? 10 : 100;
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data, isFetching } = useGetCryptoNewsQuery({ newsCategory, count });
  const { data: cryptos } = useGetCryptosQuery(15);
  const [newsList, setNewsList] = useState(data?.value);
  const [isPending, startTransition] = useTransition();
  useEffect(() => {
    startTransition(() => {
      setNewsList(data?.value);
    });
  }, [isFetching, newsList, data]);
  if (isFetching)
    return (
      <>
        <Row gutter={[24, 24]} style={{ padding: "1rem" }}>
          {Array(10)
            .fill("_")
            .map((a, i) => (
              <Col xs={24} md={12} lg={8} key={i}>
                <Card hoverable className="news-card">
                  <div className="news-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Skeleton.Input active />
                    <Skeleton.Image active />
                  </div>
                  <Skeleton paragraph={{ row: 4 }} />
                  <div className="provider-container">
                    <div style={{ marginTop: "1rem" }}>
                      <Skeleton.Avatar active />
                      <Skeleton.Input active />
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
        </Row>
      </>
    );

  return (
    <>
      <Row gutter={[24, 24]} style={{ padding: "1rem" }}>
        {!simplefied && (
          <Col span={24}>
            <Select
              showSearch
              className="select-news"
              placeholder="Select a Crypto"
              optionFilterProp="children"
              value={newsCategory}
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Option value="Cryptocurency">Cryptocurrency</Option>
              {cryptos?.data?.coins?.map((currency) => (
                <Option value={currency.name}>{currency.name}</Option>
              ))}
            </Select>
          </Col>
        )}
        {newsList?.map((news, index) => (
          <Col xs={24} md={12} lg={8} key={index}>
            <NewsCard news={news} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
