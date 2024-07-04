import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

type ScoreProps = {
  score: number,
  questionsLength: number,
}

const Score = ({ score, questionsLength }: ScoreProps) => {
  const router = useRouter();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}>
        <Typography variant="h5">Your Score: {score}/{questionsLength}</Typography>
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Button
            onClick={() => router.push('/')}
            sx={{ width: 'fit-content', textTransform: 'initial' }}
            variant="contained"
            color="secondary">Choose another test</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Score;