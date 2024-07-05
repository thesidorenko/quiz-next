export const getScoreMessage = (score: number) => {
  if (score < 5) {
    return 'Keep trying! Practice makes perfect.'
  };

  if (score >= 5 && score < 8) {
    return 'Good job! But there’s room for improvement.'
  };

  return 'Excellent work! You’re a quiz expert!';
};