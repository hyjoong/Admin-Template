import styled from "styled-components";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div>
      <Header />
      <MainContainer>
        <Sidebar />
        <div className="others"> </div>
      </MainContainer>
    </div>
  );
};

const MainContainer = styled.div`
  display: flex;
  .others {
    flex: 4;
  }
`;

export default App;
