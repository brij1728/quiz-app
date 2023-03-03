import {
  AnswerText,
  AnswersContainer,
  Container,
  QuestionContainer,
  QuestionText,
  RadioButton,
  RadioButtonLabel,
  SelectedAnswerContainer,
  SelectedAnswerText,
} from "./styles";
import { useCallback, useEffect, useRef, useState } from "react";

import { Question } from "../../types";
import { getQuestions } from "../../api";

export const Questions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: string]: string;
  }>({});

  const isMounted = useRef(false);

  const fetchQuestions = useCallback(async () => {
    const data = await getQuestions();
    console.log(`fetchQuestions called ${JSON.stringify(data)}}`);
    setQuestions(data);
  }, [setQuestions]);

  useEffect(() => {
    console.log("useEffect called");
    if (!isMounted.current) {
      isMounted.current = true;
      fetchQuestions();
    }
  }, [fetchQuestions]);

  console.log(`questions: ${JSON.stringify(questions)}`);

  const toggleSelectedAnswer = (questionId: string, answerText: string) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: answerText });
  };

  console.log(`selectedAnswer: ${JSON.stringify(selectedAnswers)}`);

  return (
    <Container>
      {questions && questions.length > 0 ? (
        questions.map((question) => {
          console.log(`question: ${question.question_text}`);
          const selectedAnswer = selectedAnswers[question.id];
          const correctAnswer = question.answers.find(
            (ans) => ans.is_correct
          )?.answer_text;

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
                        name={question.id.toString()}
                        value={ans.answer_text}
                        id={ans.id.toString()}
                        checked={
                          selectedAnswers[question.id] === ans.answer_text
                        }
                        onChange={() =>
                          toggleSelectedAnswer(
                            question.id.toString(),
                            ans.answer_text.toString()
                          )
                        }
                      />
                      <AnswerText>{ans.answer_text}</AnswerText>
                    </RadioButtonLabel>
                  );
                })}
              </AnswersContainer>

              {selectedAnswer ? (
                <>
                  {selectedAnswer === correctAnswer ? (
                    <SelectedAnswerContainer>
                      <SelectedAnswerText>
                        Cheers, Your answer is correct!
                      </SelectedAnswerText>
                    </SelectedAnswerContainer>
                  ) : (
                    <SelectedAnswerContainer>
                      <SelectedAnswerText>
                        Please select the correct answer.
                      </SelectedAnswerText>
                    </SelectedAnswerContainer>
                  )}
                </>
              ) : null}
            </div>
          );
        })
      ) : (
        <div>No questions</div>
      )}
    </Container>
  );
};
