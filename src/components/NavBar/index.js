import React from "react";
import "antd/dist/antd.css";
import "./style.css";
import { Menu, Icon } from "antd";

class Navbar extends React.Component {
  state = {
    current: "home"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <span>
            <a href="/">
              <Icon type="home" />
              Home
            </a>
          </span>
        </Menu.Item>
        <Menu.Item key="community">
          <a href="/community">
            <Icon type="team" />
            Community
          </a>
        </Menu.Item>
        <Menu.Item key="cragSearch">
          <a href="/cragsearch">
            <Icon type="search" />
            CragSearch
          </a>
        </Menu.Item>
        <Menu.Item key="belayPartner">
          <a href="/belaypartner">
            <Icon type="user-add" />
            BelayPartner
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;
