import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import { Avatar, Typography, Button, Menu } from "antd";
import { MenuOutlined, HomeOutlined, FundOutlined, MoneyCollectOutlined, BulbOutlined } from "@ant-design/icons";

import logo from "../../Asset/cryptocurrency.png";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={logo} size="large" />
        <Typography.Title level={2} className="logo">
          <Link Link to="/">
            Cryptoverse
          </Link>
        </Typography.Title>
        <Button className="menu-control-container" size="large" onClick={() => setActiveMenu(!activeMenu)}>
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark" className="menu-provider">
          <Menu.Item icon={<HomeOutlined />}>
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <NavLink to="/cryptocurrencies">Cryptocurrencies</NavLink>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <NavLink to="/exchanges">Exchanges</NavLink>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
}

export default Navbar;
