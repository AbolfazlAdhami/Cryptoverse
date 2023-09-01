import React from "react";
import Card from "antd/es/card/Card";
import { Link } from "react-router-dom";
import millify from "millify";



const CryptoCard = ({ uuid, name, rank, iconUrl, price, marketCap, change }) => {
  return (
    <Link to={`/crypto/${uuid}`}>
      <Card title={`${rank}. ${name}`} extra={<img className="crypto-image" alt="Crypto Icon" src={iconUrl} />} hoverable>
        <p>Price: {millify(price)} USD</p>
        <p>Market Cap: {millify(marketCap)}</p>
        <p>Daily Changes: {millify(change)}</p>
      </Card>
    </Link>
  );
};

export default CryptoCard;
