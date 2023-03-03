import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  margin: 10px;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #f2f2f2;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 0;
  }
`;

export const NavbarText = styled.h1`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 36px;

  color: #000;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
  text-align: center;
  /* text-transform: capitalize; */
`;
