import React from "react";
import styled from "styled-components";

const Title = ({ title }) => {
  return (
    <TitleElement>
      <span>{title}</span>
    </TitleElement>
  );
};

const TitleElement = styled.div`
  padding: 25px;
  font-weight: 600;
`;

export default Title;
