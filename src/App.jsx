import { Route, Routes } from "react-router";
import { Navbar, Home, Exchanges, Crypto, Cryptocurrencies, News } from "./components";
import { Layout } from "antd";
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
              <Route path="/crypto:id" element={<Crypto />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </Layout>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
}

export default App;
