import React, { useDeferredValue, useEffect, useState, useTransition } from "react";
import { Row, Col, Card, Input } from "antd";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import { CryptoCard } from "../";
function Cryptocurrencies({ simplefied }) {
  const count = simplefied ? 10 : 100;
  const { data: cryptoList, isFetching, status } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);
  const [search, setSearch] = useState("");
  const [isPending, startTransition] = useTransition();
  useEffect(() => {
    console.log(search);
    startTransition(() => {
      setCryptos(cryptoList?.data?.coins);
      const filterdCryptos = cryptoList?.data?.coins.filter((crypto) => crypto.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
      setCryptos(filterdCryptos);
    });
  }, [search, cryptoList]);

  if (isFetching) return "is Loading";
  return (
    <>
      {!simplefied ? (
        <div className="search-crypto">
          <Input placeholder="Search Cyptocurrency..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
      ) : null}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
            <CryptoCard {...currency} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Cryptocurrencies;
