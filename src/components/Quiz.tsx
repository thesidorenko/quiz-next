"use client";

import { useEffect, useState } from "react";
import ReplayIcon from '@mui/icons-material/Replay';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { Box, Button, Container, Typography } from "@mui/material";

import theme from "@/theme";
import Score from "./Score";
import ProgressBar from "./ProgressBar";
import { Answer } from "@/types/AnswerType";
import { Question } from "@/types/QuestionType";

type QuizProps = {
  title: string,
  questions: Question[];
};

const Quiz = ({ title, questions }: QuizProps) => {
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [clickedAnswerIndex, setClickedAnswerIndex] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState('10:00');

  useEffect(() => {
    let totalSeconds = Number(timeLeft.split(':')[0]) * 60 + Number(timeLeft.split(':')[1]);

    const timer = setInterval(() => {
      if (totalSeconds <= 0) {
        setShowScore(true);
        clearInterval(timer);
      }

      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
      totalSeconds -= 1;
    }, 1000);

      return () => clearInterval(timer);
    }, [timeLeft])

    const handleAnswerOptionClick = (index: number, isCorrect: boolean) => {
      setClickedAnswerIndex(index);

      if (isCorrect) {
        setScore(score + 1);
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
      if (confirm('Are you sure? You lose your progress')) {
        setScore(0);
        setShowScore(false);
        setCurrentQuestionIndex(0);
        setClickedAnswerIndex(null);
      }
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
      <Box
        sx={{
          bgcolor: 'background.default',
          width: '100%',
          height: '100vh',
          display: "flex",
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container
          sx={{
            bgcolor: 'background.paper',
            borderRadius: 3,
            padding: 2,
            width: '50%',
            minHeight: 'min-content',
            [theme.breakpoints.down('md')]: {
              width: '90%',
            },
          }}
        >
          <Box>
            <Typography variant="h3" color="primary.main" sx={{ marginBottom: 3 }}>{title} Quiz</Typography>
            <Box>
              {showScore ? <Score score={score} questionsLength={questions.length} /> : (
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6">Question {currentQuestionIndex + 1} of {questions.length}</Typography>
                    <Typography variant="subtitle2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <AccessTimeOutlinedIcon fontSize="small" />{timeLeft}
                    </Typography>
                  </Box>
                  <Typography variant="subtitle1" sx={{ marginTop: 1 }}>{questions[currentQuestionIndex].question}</Typography>
                  <Box sx={{ display: "flex", flexDirection: 'column', marginBlock: 2, gap: 1 }}>
                    {questions[currentQuestionIndex].answers.map((answer, index) => {
                      const answerStyles = getAnswerStyles(index, answer);
                      return (
                        <Button
                          key={index}
                          disabled={clickedAnswerIndex !== null}
                          onClick={() => handleAnswerOptionClick(index, answer.isCorrect)}
                          sx={{
                            bgcolor: answerStyles,
                            border: 1,
                            borderColor: 'background.default',
                            textTransform: "initial",
                            fontSize: '1rem',
                          }}
                          color='secondary'
                        >
                          {answer.text}
                        </Button>
                      )
                    })}
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                    <Button
                      variant="outlined"
                      onClick={handleRestartButton}
                    >Restart<ReplayIcon fontSize="small" />
                    </Button>
                    <Button
                      onClick={handleNextButton}
                      sx={{ paddingInline: 4, color: 'primary.contrastText' }}
                      variant="contained">Next</Button>
                  </Box>
                  <ProgressBar currentQuestion={currentQuestionIndex} totalQuestions={questions.length} />
                </Box>
              )}
            </Box>
          </Box>
        </Container>
      </Box>
    )
  }

export default Quiz;