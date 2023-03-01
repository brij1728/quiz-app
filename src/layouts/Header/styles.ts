import styled from "styled-components";

export const Container = styled.header`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.primaryColors.primaryHeader};
`;
