"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import { useState } from "react";
import data from "@/data.json";
import Quiz from "@/components/Quiz";
import { Question } from "@/types/QuestionType";

const quizzes = ['JavaScript', 'React'];

export default function Home() {
  const [questions] = useState<Question[]>(data);
  const [chosenQuiz, setChosenQuiz] = useState<string | null>(null);

  const handleChoseQuizClick = (type: string) => {
    setChosenQuiz(type);
  }

  return (
    <Box sx={{
      bgcolor: chosenQuiz ? 'background.default' : 'background.paper',
      width: '100%',
      height: '100vh',
      display: "flex",
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      }}
    >
      {!chosenQuiz && (
        <Container maxWidth='lg' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
          <Typography variant="h4" color='primary'>Choose a quiz and see how good you are!</Typography>
          <Box sx={{ display: 'flex', gap: 3, width: '100%', justifyContent: 'center', flexWrap: 'wrap' }}>
            {quizzes.map(quiz => (
              <Button
              key={quiz}
              onClick={() => handleChoseQuizClick(quiz)}
              variant="contained"
              color="secondary"
              sx={{
                textTransform: 'initial',
                width: 300,
                height: 300,
                fontSize: 30,
              }}
              >{quiz}</Button>
            ))}
          </Box>
        </Container>
      )}

      {chosenQuiz && (
        <Container sx={{
          bgcolor: 'background.paper',
          borderRadius: 3,
          padding: 2,
          width: '50%',
          minHeight: 'min-content',
        }}>
          {chosenQuiz === 'JavaScript' && (
            <Box>
              <Typography variant="h3" color="primary.main" sx={{ marginBottom: 3 }}>JavaScript Quiz</Typography>
              <Box>
                <Quiz questions={questions} />
              </Box>
            </Box>
          )}
          {chosenQuiz === 'React' && (
            <Box>
              <Typography variant="h3" color="primary.main" sx={{ marginBottom: 3 }}>React Quiz</Typography>
              <Box>
                <Quiz questions={questions} />
              </Box>
            </Box>
          )}
        </Container>
      )}
    </Box>
  );
}
