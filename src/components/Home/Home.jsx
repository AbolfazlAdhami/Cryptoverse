import React, { useState, useTransition } from "react";
import { Typography, Row, Col, Statistic, Skeleton } from "antd";
import { Link } from "react-router-dom";
import millify from "millify";
import { useGetGloblaStateQuery } from "../../services/cryptoApi";
import { Cryptocurrencies, News } from "../";

function Home() {
  const [isPending, startTransition] = useTransition();
  const [time, setTime] = useState(getTime());
  const { isFetching, data } = useGetGloblaStateQuery();

  const date = new Date().toLocaleDateString();
  const globalState = data?.data;
  function getTime() {
    const newTime = new Date();
    const hour = newTime.getHours();
    const min = newTime.getMinutes();
    const sec = newTime.getSeconds();
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = weekday[newTime.getDay()];
    return `${hour}:${min}:${sec} ${day}`;
  }
  setTimeout(() => {
    startTransition(() => {
      setTime(getTime());
    });
  }, 1000);

  const listData = [
    { id: 1, title: "Total Cryptocurrencies", data: millify(globalState?.totalCoins) },
    { id: 2, title: "Total Exchanges", data: globalState?.totalExchanges },
    { id: 3, title: "Total Market Cap", data: millify(globalState?.totalMarketCap) },
    { id: 4, title: "Total 24h Volume", data: millify(globalState?.total24hVolume) },
    { id: 5, title: "Total Markets", data: millify(globalState?.totalMarkets) },
  ];
  const { Title } = Typography;

  return (
    <div className="home-provider">
      <Title level={2} className="heading">
        Global Crypto Stats Today
        <Statistic className="time-table" value={`${time} ${date}`} />
      </Title>
      <Row style={{ padding: 1 }}>
        {listData.map((item) => (
          <Col span={12} key={item.id}>
            <Statistic formatter={() => (isFetching ? <Skeleton.Button active size="default" /> : item.data)} title={item.title} />
          </Col>
        ))}
      </Row>

      <div className="home-heading-container">
        <Title level={3} className="home-title">
          Top 10 Cryptocurrencies in the World
        </Title>
        <Title level={5} className="show-more">
          <Link to={"/cryptocurrencies"}>Show more</Link>
        </Title>
      </div>
      <Cryptocurrencies simplefied={true} />
      <div className="home-heading-container">
        <Title level={3} className="home-title">
          Lastes Crypto News
        </Title>
        <Title level={5} className="show-more">
          <Link to={"/news"}>Show more</Link>
        </Title>
      </div>
      <News simplefied={true} />
    </div>
  );
}

export default Home;
