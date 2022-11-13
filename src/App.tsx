import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SideMenu } from "./SideMenu/Index";
import { Home } from "./pages/Home/Index";
import { TodoList } from "./pages/TodoList/Index";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
`;

function App() {
  return (
    <Router>
      <StyledWrapper>
        <SideMenu />
        <Routes>
          <Route index element={<Home />} />
          <Route path="todoList" element={<TodoList />} />
        </Routes>
      </StyledWrapper>
    </Router>
  );
}

export default App;
