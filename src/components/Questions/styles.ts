import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: flex-start;

  row-gap: 20px;
  padding: 20px;
`;

export const QuestionContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const QuestionText = styled.h2`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`;

export const AnswersContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  padding: 10px;

  /* background-color: #f5f5f5; */
`;

export const AnswerText = styled.h3`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;

  text-align: center;
  /* text-transform: capitalize; */
`;

export const RadioButtonLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
`;

export const RadioButtonInput = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

export const RadioButton = styled.input.attrs({ type: "radio" })`
  border-radius: 50%;
  border: 2px solid gray;
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const SelectedAnswerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #f2f2f2;
`;

export const SelectedAnswerText = styled.p`
  font-size: 18px;
  font-weight: bold;
`;
