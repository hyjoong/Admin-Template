import React from "react";
import styled from "styled-components";

const FeaturedInfo = ({ fistTitle, secondTitle, firstCount, secondCount }) => {
  return (
    <FeaturedWrapper>
      <FeaturedItem>
        <span className="featuredTitle">{fistTitle}</span>
        <div className="featuredCountContainer">
          <span className="featuredCount">{firstCount}명</span>
        </div>
      </FeaturedItem>
      <FeaturedItem>
        <span className="featuredTitle">{secondTitle}</span>
        <div className="featuredCountContainer">
          <span className="featuredCount">{secondCount}명</span>
        </div>
      </FeaturedItem>
    </FeaturedWrapper>
  );
};

const FeaturedWrapper = styled.div`
  min-width: 330px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  flex: 1;
  margin: 0px 20px;
  padding: 35px 50px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.3);
`;

const FeaturedItem = styled.div`
  width: 50%;
  text-align: center;

  .featuredTitle {
    color: #a3a3a3;
  }
  .featuredCountContainer {
    margin-top: 10px;
    .featuredCount {
      font-size: 24px;
      font-weight: 600;
    }
  }
`;

export default FeaturedInfo;
