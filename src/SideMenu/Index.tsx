import { NavLink } from "react-router-dom";
import { StyledSideMenuWrapper } from "./styled";

export const SideMenu = (): JSX.Element => {
  return (
    <StyledSideMenuWrapper>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/todoList">Tasks</NavLink>
    </StyledSideMenuWrapper>
  );
};
