'use client'

import Quiz from "@/components/Quiz";
import data from '@/api/data.json';
import { useState } from "react";
import { Question } from "@/types/QuestionType";

const CssQuizPage = () => {
  const [questions] = useState<Question[]>(data.css);

  return (
    <Quiz title='CSS' questions={questions} />
  )
}

export default CssQuizPage;