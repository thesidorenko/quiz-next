"use client";

import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ProgressBar from "./ProgressBar";
import { Answer } from "@/types/AnswerType";
import { Question } from "@/types/QuestionType";
import ReplayIcon from '@mui/icons-material/Replay';

type QuizProps = {
  questions: Question[];
};

const Quiz = ({ questions }: QuizProps) => {
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [clickedAnswerIndex, setClickedAnswerIndex] = useState<number | null>(null);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const handleAnswerOptionClick = (index: number, isCorrect: boolean) => {
    setClickedAnswerIndex(index);

    if (isCorrect) {
      setScore(score + 1);
      setAnswers(prev => [...prev, true]);
    } else {
      setAnswers(prev => [...prev, false]);
    }
  };

  const handleNextButton = () => {
    setClickedAnswerIndex(null);

    const nextQuestionIndex = currentQuestionIndex + 1;

    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartButton = () => {
    setScore(0);
    setAnswers([]);
    setShowScore(false);
    setCurrentQuestionIndex(0);
    setClickedAnswerIndex(null);
  };

  const getAnswerStyles = (index: number, answer: Answer) => {
    if (index === clickedAnswerIndex && answer.isCorrect) {
      return 'success.main';
    } else if (index === clickedAnswerIndex && !answer.isCorrect) {
      return 'error.main';
    } else {
      return '';
    }
  };

  return (
    <div>
      {showScore ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}>
            <Typography variant="h5">Your Score: {score}/{questions.length}</Typography>
            <Button
              onClick={handleRestartButton}
              sx={{ width: 'fit-content' }}
              variant="contained"
              color="secondary">Restart</Button>
          </Box>
        </Box>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6">Question {currentQuestionIndex + 1} of {questions.length}</Typography>
          <Typography variant="subtitle1" sx={{ marginTop: 1 }}>{questions[currentQuestionIndex].question}</Typography>
          <Box sx={{ display: "flex", flexDirection: 'column', marginBlock: 2, gap: 1 }}>
            {questions[currentQuestionIndex].answers.map((answer, index) => {
              const answerStyles = getAnswerStyles(index, answer);

              return (
                <Button
                  key={index}
                  disabled={!!clickedAnswerIndex}
                  onClick={() => handleAnswerOptionClick(index, answer.isCorrect)}
                  sx={{ bgcolor: answerStyles, border: 1, borderColor: 'background.default', textTransform: "initial", fontSize: '1rem' }}
                  color='secondary'
                >
                  {answer.text}
                </Button>
              )
            })}
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <Button variant="outlined">Restart<ReplayIcon fontSize="small" /></Button>
            <Button
              onClick={handleNextButton}
              sx={{ paddingInline: 4, color: 'primary.contrastText' }}
              variant="contained">Next</Button>
          </Box>
          <ProgressBar currentQuestion={currentQuestionIndex} totalQuestions={questions.length} />
        </Box>
      )}
    </div>
  )
}

export default Quiz;