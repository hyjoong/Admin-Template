import React from "react";
import styled from "styled-components";

const Detail = () => {
  return (
    <DetailWrapper>
      <DetailContainer>
        <h1 className="detailTitle">Edit</h1>
        <button className="addButton">Create</button>
      </DetailContainer>
      <ContentContainer>
        <div className="contentShow"></div>
        <div className="contentUpdate"></div>
      </ContentContainer>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  width: 800px;
`;

const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .addButton {
    width: 80px;
    border: none;
    padding: 5px;
    background-color: teal;
    border-radius: 5px;
    cursor: pointer;
    color: white;
  }
`;

const ContentContainer = styled.div`
  min-width: 800px;
  min-height: 400px;
  display: flex;
  margin-top: 20px;
  .contentShow {
    flex: 1;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.3);
  }
  .contentUpdate {
    flex: 1;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.3);
    margin-left: 20px;
  }
`;

export default Detail;
