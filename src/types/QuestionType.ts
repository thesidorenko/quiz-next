import { Answer } from "./AnswerType";

export type Question = {
  id: number,
  question: string;
  answers: Answer[];
};