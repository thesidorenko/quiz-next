import { LinearProgress, Box, Typography } from '@mui/material';

type ProgressBarProps = {
  currentQuestion: number,
  totalQuestions: number,
};

function ProgressBar({ currentQuestion, totalQuestions }: ProgressBarProps) {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <Box sx={{ width: '100%', my: 2 }}>
      <LinearProgress
        value={progress}
        variant="determinate"
        color='secondary'
        sx={{ border: 1, borderRadius: 2, borderColor: 'secondary.main', bgcolor: 'transparent', height: 7 }}
      />
    </Box>
  );
}

export default ProgressBar;