'use client'

import Quiz from "@/components/Quiz";
import data from '@/api/data.json';
import { useState } from "react";
import { Question } from "@/types/QuestionType";

const HtmlQuizPage = () => {
  const [questions] = useState<Question[]>(data.html);

  return (
    <Quiz title='HTML' questions={questions} />
  )
}

export default HtmlQuizPage;