import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import Chart from "../../components/Chart/Chart";
import Title from "../../components/common/Title";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import {
  userNewState,
  userSecessionState,
  userTotalecessionState,
  userTotalState,
} from "../../components/recoil/userState";

const Home = () => {
  const newCount = useRecoilValue(userNewState);
  const totalCount = useRecoilValue(userTotalState);
  const secessionCount = useRecoilValue(userSecessionState);
  const toTalsecessionCount = useRecoilValue(userTotalecessionState);
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
      <Chart grid />
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
