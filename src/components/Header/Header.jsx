import React from "react";
import styled from "styled-components";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

const Header = () => {
  return (
    <Topbar>
      <HeaderWrapper>
        <HeaderLeft>
          <img src="/images/logo.png" alt="loago" />
        </HeaderLeft>
        <HeaderRight>
          <div className="headerIconContainer">
            <NotificationsNone />
            <span className="headerIconBadge">2</span>
          </div>
          <div className="headerIconContainer">
            <Language />
          </div>
          <div className="headerIconContainer">
            <Settings />
          </div>
        </HeaderRight>
      </HeaderWrapper>
    </Topbar>
  );
};

const Topbar = styled.header`
  width: 100%;
  height: 50px;
  background-color: wheat;
  position: sticky;
  top: 0;
  z-index: 999;
`;
const HeaderWrapper = styled.div`
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLeft = styled.div``;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  .headerIconContainer {
    position: relative;
    margin-right: 10px;
    color: #555;
    cursor: pointer;

    .headerIconBadge {
      position: absolute;
      width: 15px;
      height: 15px;
      top: -5px;
      right: 0;
      background-color: red;
      color: white;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 10px;
    }
  }
`;

export default Header;
