export type Question = {
  id: number;
  question_text: string;
  answers: {
    id: number;
    answer_text: string;
    is_correct: boolean;
  }[];
};
