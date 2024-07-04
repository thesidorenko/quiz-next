'use client'

import Quiz from "@/components/Quiz";
import data from '../../../data.json'
import { useState } from "react";
import { Question } from "@/types/QuestionType";

const ReactQuizPage = () => {
  const [questions] = useState<Question[]>(data.react);

  return (
    <Quiz title='React' questions={questions} />
  )
}

export default ReactQuizPage;