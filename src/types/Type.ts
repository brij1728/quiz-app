export type Question = {
  // id: number;
  // question: string;
  // option1: string;
  // option2: string;
  // option3: string;
  // option4: string;
  // answer: string;

  id: number;
  question_text: string;
  answers: {
    id: number;
    answer_text: string;
    is_correct: boolean;
  }[];
};
