"use client";

import Link from "next/link";
import theme from "@/theme";
import { Button } from "@mui/material";
import { Quiz } from "@/types/QuizType";

type QuizTileProps = {
  quiz: Quiz,
}

const QuizTile = ({ quiz }: QuizTileProps) => {
  return (
    <Link href={quiz.path}>
      <Button
        variant="contained"
        color="secondary"
        sx={{
          textTransform: 'initial',
          width: 250,
          height: 250,
          fontSize: 30,
          [theme.breakpoints.down('sm')]: {
            width: 200,
            height: 200,
          },
        }}
      >{quiz.title}</Button>
  </Link>
  )
}
export default QuizTile;