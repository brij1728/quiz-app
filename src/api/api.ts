import { Question } from "../types";

const directusUrl = "https://yom2czlz.directus.app/items";

export const getQuestions = async (): Promise<Question[]> => {
  const questionQueryParams =
    "?fields=id,question_text,answers.id,answers.answer_text,answers.is_correct";

  try {
    const response = await fetch(
      `${directusUrl}/questions/${questionQueryParams}}`
    );

    const { data } = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
  return [];
};
