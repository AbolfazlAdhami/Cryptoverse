import { Typography, Row, Col, Statistic } from "antd";
const { Title } = Typography;
import { useGetExchangesQuery } from "../../services/cryptoApi";

function Home() {
  const { isFetching, data, status } = useGetExchangesQuery();
  if (isFetching) return "Loading";
  console.log(data);
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row style={{ padding: 1 }}>
        <Col span={12}>
          <Statistic value={5} title="Total Cryptocurrencies" />
        </Col>
        <Col span={12}>
          <Statistic value={5} title="Total Exchanges" />
        </Col>
        <Col span={12}>
          <Statistic value={5} title="Total Market Cap" />
        </Col>
        <Col span={12}>
          <Statistic value={5} title="Total 24h Volume" />
        </Col>
        <Col span={12}>
          <Statistic value={5} title="Total Markets" />
        </Col>
        {/* <Col span={12}><Statistic value={5} title=""/></Col> */}
      </Row>
    </>
  );
}

export default Home;
