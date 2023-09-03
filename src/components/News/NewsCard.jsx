import React from "react";
import { Avatar, Card, Typography } from "antd";
import moment from "moment";
const { Text, Title } = Typography;

function NewsCard({ news }) {
  const demoImage = "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

  return (
    <Card hoverable className="news-card">
      <a href={news?.url}>
        <div className="news-image-container">
          <Title className="news-title" level={4}>
            {news.name.length >= 50 ? `${news.name.substring(0, 50)}...` : news.name.substring(0, 50)}
          </Title>
          <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="" style={{ maxWidth: "200px", maxHeight: "150px", borderRadius: "10px" }} />
        </div>
        <p>{news.description.length >= 75 ? `${news.description.substring(0, 75)}...` : news.description}</p>
        <div className="provider-container">
          <div>
            <Avatar shape="circle" src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} />
            <Text className="provider-name">{news.provider[0]?.name}</Text>
          </div>
          <Text>{moment(news.datePublished).startOf("ss").fromNow()}</Text>
        </div>
      </a>
    </Card>
  );
}

export default NewsCard;
