import { Route, Routes } from "react-router";
import { Navbar, Home, Exchanges, Crypto, Cryptocurrencies, News } from "./components";
import { Layout, Space, Typography } from "antd";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <div className="routes">
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto:coinId" element={<Crypto />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </Layout>
        </div>
        <div className="footer">
          <Typography.Title level={5} style={{ color: "white", textAlign: "center" }}>
            Copyright © 2023
            <Link to="/" style={{ padding: "1rem" }}>
              Cryptoverse
            </Link>{" "}
            <br />
            All Rights Reserved.
          </Typography.Title>
          <Space>
            <Link to={"/"}>Home</Link>
            <Link to={"/exchanges"}>Exchanges</Link>
            <Link to={"/news"}>News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
