import React from "react";
import styled from "styled-components";
import Title from "../../components/common/Title";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";

const newCount = 41;
const totalCount = 215;
const secessionCount = 7;
const toTalsecessionCount = 17;

const Home = () => {
  return (
    <HomeWrapper>
      <Title title="사용자 통계" />
      <FeaturedInfoContainer>
        <FeaturedInfo
          fistTitle="신규 가입자 수"
          secondTitle="총 가입자 수"
          firstCount={newCount}
          secondCount={totalCount}
        />
        <FeaturedInfo
          fistTitle="신규 가입자 수"
          secondTitle="총 가입자 수"
          firstCount={secessionCount}
          secondCount={toTalsecessionCount}
        />
      </FeaturedInfoContainer>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  flex: 4;
  background-color: #e5e5e5;
`;

const FeaturedInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default Home;
