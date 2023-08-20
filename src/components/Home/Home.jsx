import React from "react";
import { Link } from "react-router-dom";

import { Typography, Row, Col, Statistic } from "antd";
const { Title } = Typography;

function Home() {
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
    </>
  );
}

export default Home;
