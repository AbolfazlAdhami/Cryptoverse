import React from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar } from "antd";
import HTMLReactParser from "html-react-parser";

import { useGetExchangesQuery } from "../../services/cryptoApi";
import { Loader } from "../";

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();

  if (isFetching) return <Loader />;
  const exchangesList = data?.data?.coins;

  return (
    <>
      <Row align={"middle"} justify={"space-evenly"}>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>Current Pirce</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
        {exchangesList.map((exchange) => {
          const { uuid, rank, iconUrl, name, numberOfMarkets, btcPrice, price } = exchange;

          return (
            <Col span={24} style={{ margin: "1rem 0" }}>
              <Collapse>
                <Panel
                  key={uuid}
                  showArrow={false}
                  header={
                    <Row key={uuid} align={"middle"} justify={"space-around"}>
                      <Col span={6}>
                        <Text>
                          <strong>{rank}.</strong>
                        </Text>
                        <Avatar className="exchange-image" src={iconUrl} />
                        <Text>
                          <strong>{name}</strong>
                        </Text>
                      </Col>
                      <Col style={{textAlign:"start"}} span={6}>${millify(price)}</Col>
                      <Col style={{textAlign:"start"}} span={6}>{millify(numberOfMarkets)}</Col>
                      <Col style={{textAlign:"start"}} span={6}>{millify(btcPrice)}%</Col>
                    </Row>
                  }
                >
                  {HTMLReactParser(exchange.description || "")}
                </Panel>
              </Collapse>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Exchanges;
