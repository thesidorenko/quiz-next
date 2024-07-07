'use client'

import { useState } from "react";

import data from '@/api/data.json'
import Quiz from "@/components/Quiz";
import { Question } from "@/types/QuestionType";

const TypescriptQuizPage = () => {
  const [questions] = useState<Question[]>(data.typescript);

  return (
    <Quiz title='TypeScript' questions={questions} />
  )
}

export default TypescriptQuizPage;