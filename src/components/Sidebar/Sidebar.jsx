import {
  AttachMoney,
  Book,
  Home,
  PermIdentity,
  Storefront,
  Timeline,
  TrendingUp,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <SideWrapper>
      <SidebarContainer>
        <SlidebarMenu>
          <h3 className="slidebarTitle">Dashboard</h3>
          <ul className="slidebarList">
            <li className="slidebarItem">
              <Home className="sidebarIcon" />
              <span>DashBoard</span>
            </li>
            <li className="slidebarItem">
              <Book className="sidebarIcon" />
              <span>table</span>
            </li>
            <li className="slidebarItem">
              <TrendingUp className="sidebarIcon" />
              <span>Analytics</span>
            </li>
          </ul>
        </SlidebarMenu>

        <SlidebarMenu>
          <h3 className="slidebarTitle">Quick Menu</h3>
          <ul className="slidebarList">
            <li className="slidebarItem active">
              <PermIdentity className="sidebarIcon" />
              <span>User</span>
            </li>
            <li className="slidebarItem">
              <Storefront className="sidebarIcon" />
              <span>Products</span>
            </li>
            <li className="slidebarItem">
              <AttachMoney className="sidebarIcon" />
              <span>Transactions</span>
            </li>
          </ul>
        </SlidebarMenu>
      </SidebarContainer>
    </SideWrapper>
  );
};

const SideWrapper = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  position: sticky;
  top: 50px;
`;

const SidebarContainer = styled.div`
  padding: 10px;
  color: #555;
`;

const SlidebarMenu = styled.div`
  margin-bottom: 10px;
  .slidebarTitle {
    font-size: 13px;
  }
  .slidebarList {
    list-style: none;
    padding: 5px;
    .slidebarItem {
      display: flex;
      align-items: center;
      padding: 5px;
      border-radius: 10px;
      cursor: pointer;

      &.active,
      :hover {
        background-color: rgb(240, 240, 255);
      }

      .sidebarIcon {
        margin-right: 5px;
        font-size: 20px !important;
      }
    }
  }
`;

export default Sidebar;
