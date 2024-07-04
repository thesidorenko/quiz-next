'use client'

import { useState } from "react";

import data from '../../../data.json'
import Quiz from "@/components/Quiz";
import { Question } from "@/types/QuestionType";

const ReactQuizPage = () => {
  const [questions] = useState<Question[]>(data.react);

  return (
    <Quiz title='React' questions={questions} />
  )
}

export default ReactQuizPage;