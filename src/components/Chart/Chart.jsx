import React from "react";
import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useRecoilValue } from "recoil";
import { getUserState } from "../recoil/userState";

const Chart = ({ grid }) => {
  const userList = useRecoilValue(getUserState);
  return (
    <ChartWrapper>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={userList.data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <YAxis />
          <Line type="monotone" dataKey="Time User" stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
};

const ChartWrapper = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #ffffff;
  -webkit-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.3);
`;

export default Chart;
