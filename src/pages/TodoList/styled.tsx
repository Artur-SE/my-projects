import styled from "styled-components";

export const StyledTodoList = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
  }

  button {
    margin-top: 1rem;
  }

  .MuiInputBase-root {
    margin-bottom: 1rem;
  }
`;
