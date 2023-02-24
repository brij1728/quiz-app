import { QuestionContainer, QuestionText } from "./styles";
import { useEffect, useState } from "react";

import { Question } from "../../types";
import { getQuestions } from "../../api";

export const Questions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  console.log(questions);

  useEffect(() => {
    const fetchQuestions = async () => {
      const data = await getQuestions();
      console.log(data);

      setQuestions(data);
    };

    fetchQuestions();
  }, []);

  return (
    <QuestionContainer>
      <h1>Questions</h1>
      {questions && questions.length > 0 ? (
        questions.map((question) => {
          return (
            <div key={question.id}>
              <QuestionText>{question.question_text}</QuestionText>
            </div>
          );
        })
      ) : (
        <div>No questions</div>
      )}

      <QuestionText>What is the capital of India?</QuestionText>
    </QuestionContainer>
  );
};
