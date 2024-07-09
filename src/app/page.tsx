import { Box, Container, Typography } from "@mui/material";

import QuizTile from "@/components/QuizTile";
import quizzes from '@/api/quizzes.json';

export default function Home() {
  return (
    <Container
      maxWidth='md'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        padding: 3
      }}
    >
      <Typography variant="h4" color='primary'>Choose a quiz and see how good you are!</Typography>
      <Box
        sx={{
          display: 'flex',
          gap: 4,
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {quizzes.map(quiz => <QuizTile key={quiz.id} quiz={quiz} />)}
      </Box>
    </Container>
  );
}
