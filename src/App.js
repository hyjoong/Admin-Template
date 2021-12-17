import styled from "styled-components";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div>
      <Header />
      <MainContainer>
        <Sidebar />
        <Home />
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
