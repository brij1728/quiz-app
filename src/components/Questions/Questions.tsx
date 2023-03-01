import {
  AnswerText,
  AnswersContainer,
  Container,
  QuestionContainer,
  QuestionText,
  RadioButton,
  RadioButtonLabel,
} from "./styles";
import { useCallback, useEffect, useRef, useState } from "react";

import { Question } from "../../types";
import { getQuestions } from "../../api";

export const Questions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

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

  const toggleSelectedAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(e.target.value);
  };

  console.log(`selectedAnswer: ${selectedAnswer}`);

  return (
    <Container>
      {questions && questions.length < 0 ? (
        <div>No questions</div>
      ) : (
        questions.map((question) => {
          console.log(`question: ${question.question_text}`);
          return (
            <div key={question.id}>
              <QuestionContainer>
                <QuestionText>{question.question_text}</QuestionText>
              </QuestionContainer>
              <AnswersContainer>
                {question.answers.map((ans) => {
                  return (
                    <RadioButtonLabel key={ans.id}>
                      <RadioButton
                        name={selectedAnswer}
                        value={ans.answer_text}
                        id={ans.id.toString()}
                        checked={selectedAnswer === ans.answer_text}
                        onChange={(event) => toggleSelectedAnswer(event)}
                      />
                      <AnswerText>{ans.answer_text}</AnswerText>
                    </RadioButtonLabel>
                  );
                })}
              </AnswersContainer>
            </div>
          );
        })
      )}
    </Container>
  );
};
