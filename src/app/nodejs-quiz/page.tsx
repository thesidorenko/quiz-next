'use client'

import Quiz from "@/components/Quiz";
import data from '@/api/data.json';
import { useState } from "react";
import { Question } from "@/types/QuestionType";

const NodejsQuizPage = () => {
  const [questions] = useState<Question[]>(data.nodejs);

  return (
    <Quiz title='NodeJS' questions={questions} />
  )
}

export default NodejsQuizPage;