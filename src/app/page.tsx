import QuizTile from "@/components/QuizTile";
import { Box, Container, Typography } from "@mui/material";

const quizzes = ['JavaScript', 'React'];

export default function Home() {
  return (
    <Box sx={{
      bgcolor: 'background.paper',
      width: '100%',
      height: '100vh',
      display: "flex",
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Container maxWidth='lg' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
        <Typography variant="h4" color='primary'>Choose a quiz and see how good you are!</Typography>
        <Box sx={{ display: 'flex', gap: 3, width: '100%', justifyContent: 'center', flexWrap: 'wrap' }}>
          {quizzes.map(quiz => <QuizTile key={quiz} quiz={quiz} />)}
        </Box>
      </Container>
    </Box>
  );
}
