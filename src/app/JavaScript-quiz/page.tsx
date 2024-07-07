'use client'

import Quiz from "@/components/Quiz";
import data from '@/api/data.json';
import { useState } from "react";
import { Question } from "@/types/QuestionType";

const JavaScriptQuizPage = () => {
  const [questions] = useState<Question[]>(data.javascript);

  return (
    <Quiz title='JavaScript' questions={questions} />
  )
}

export default JavaScriptQuizPage;