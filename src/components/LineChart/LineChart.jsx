import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import "chart.js/auto";
import moment from "moment";

const { Title } = Typography;

function LineChart({ coinHistory, currentPrice, coinName }) {
  let coinPrice = [];
  let coinTimestamp = [];

  console.log(coinHistory);

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(-calculateTimeDifference(coinHistory?.data?.history[i].timestamp));
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    x: {
      display: false,
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  };

  function calculateTimeDifference(userInput) {
    // تاریخ و زمان حال
    var currentDate = new Date();

    // تبدیل ورودی کاربر به میلی‌ثانیه
    var userDate = new Date(userInput);
    var userTimeInMillis = userDate.getTime();

    // محاسبه فاصله زمانی
    var timeDifferenceInMillis = userTimeInMillis - currentDate.getTime();

    // تبدیل میلی‌ثانیه به ثانیه
    var timeDifferenceInSeconds = timeDifferenceInMillis / 1000;

    return timeDifferenceInSeconds;
  }

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart{" "}
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            Change: {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
  // return "chart";
}

export default LineChart;
