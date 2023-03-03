import { Question } from "../types";

const directusUrl = "https://yom2czlz.directus.app/items";

export const getQuestions = async (): Promise<Question[]> => {
  const questionQueryParams =
    "?fields=id,question_text,answers.id,answers.answer_text,answers.is_correct";

  try {
    const response = await fetch(
      `${directusUrl}/questions/${questionQueryParams}`
    );

    const { data } = await response.json();
    console.log(data);

    return data.map((question: any) => {
      const answers = question.answers?.map((answer: any) => ({
        id: answer.id,
        answer_text: answer.answer_text,
        is_correct: answer.is_correct ?? false,
      }));

      return {
        id: question.id,
        question_text: question.question_text,
        answers,
      };
    });
  } catch (error) {
    console.log(error);
  }
  return [];
};
