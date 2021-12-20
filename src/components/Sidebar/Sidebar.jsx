import React from "react";
import {
  AttachMoney,
  Book,
  Home,
  PermIdentity,
  Storefront,
  Timeline,
  TrendingUp,
} from "@material-ui/icons";
import styled from "styled-components";
import SlideItem from "./SlideItem";

const Sidebar = ({ location }) => {
  const SlideItems = [
    {
      name: "DashBoard",
      path: "/",
      active: false,
      icon: <Home />,
    },
    {
      name: "table",
      path: "/table",
      active: false,
      icon: <Book />,
    },
    {
      name: "Analytics",
      path: "/analytics",
      active: false,
      icon: <TrendingUp />,
    },
    {
      name: "User",
      path: "/users",
      active: false,
      icon: <PermIdentity />,
    },
    {
      name: "Products",
      path: "/products",
      active: false,
      icon: <Storefront />,
    },
    {
      name: "Transactions",
      path: "/transactions",
      active: false,
      icon: <AttachMoney />,
    },
  ];

  return (
    <SideWrapper>
      <SidebarContainer>
        <SlidebarMenu>
          <h3 className="slidebarTitle">Dashboard</h3>
          <ul className="slidebarList">
            {SlideItems.map((menu) => (
              <SlideItem menu={menu} path={`${menu.path}`} />
            ))}
          </ul>
        </SlidebarMenu>
      </SidebarContainer>
    </SideWrapper>
  );
};

const SideWrapper = styled.div`
  min-width: 300px;
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
      padding: 10px;
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
