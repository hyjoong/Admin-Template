import React from "react";
import styled from "styled-components";
import ChapterTable from "../../components/Table/ChapterTable";

const User = () => {
  return (
    <QuestionWrapper>
      <TableWrapper>
        <ChapterTable />
      </TableWrapper>
    </QuestionWrapper>
  );
};

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TableWrapper = styled.div`
  margin: 30px auto 0;
  min-width: 900px;
  min-height: 650px;
`;

export default User;
