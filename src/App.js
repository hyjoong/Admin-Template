import styled from "styled-components";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Question from "./pages/Home/Question";
import User from "./pages/Home/User";
import Detail from "./components/Detail/Detail";

const App = () => {
  return (
    <Router>
      <Header />
      <MainContainer>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/users" element={<User />}></Route>
          <Route exact path="/question" element={<Question />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
        </Routes>
      </MainContainer>
    </Router>
  );
};

const MainContainer = styled.div`
  display: flex;
`;

export default App;
