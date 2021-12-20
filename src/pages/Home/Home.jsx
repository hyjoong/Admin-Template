import React from "react";
import styled from "styled-components";
import Chart from "../../components/Chart/Chart";
import { userData } from "../../components/Chart/dummyData";
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
      <Title title="실시간 접속 통계" />
      <Chart data={userData} grid />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  background-color: #ffffff;
`;

const FeaturedInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default Home;
