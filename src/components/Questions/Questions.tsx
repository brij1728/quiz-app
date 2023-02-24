import { QuestionContainer, QuestionText } from "./styles";
import { useCallback, useEffect, useRef, useState } from "react";

import { Question } from "../../types";
import { getQuestions } from "../../api";

export const Questions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const isMounted = useRef(false);

  const fetchQuestions = useCallback(async () => {
    const data = await getQuestions();
    console.log("fetchQuestions called");
    setQuestions(data);
  }, [setQuestions]);

  useEffect(() => {
    console.log("useEffect called");
    if (!isMounted.current) {
      isMounted.current = true;
      fetchQuestions();
    }
  }, [fetchQuestions]);

  console.log(`questions: ${questions}`);

  return (
    <QuestionContainer>
      <h1>Questions</h1>
      {questions && questions.length < 0 ? (
        <div>No questions</div>
      ) : (
        questions.map((question) => {
          console.log(`question: ${question.question_text}`);
          return (
            <div key={question.id}>
              <QuestionText>{question.question_text}</QuestionText>
            </div>
          );
        })
      )}

      <QuestionText>What is the capital of India?</QuestionText>
      <h3>Answer</h3>
    </QuestionContainer>
  );
};
