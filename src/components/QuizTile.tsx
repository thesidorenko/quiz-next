import { Button } from "@mui/material";
import Link from "next/link";

type QuizTileProps = {
  quiz: string,
}

const QuizTile = ({ quiz }: QuizTileProps) => {
  return (
    <Link href={`${quiz}-quiz`}>
    <Button
      variant="contained"
      color="secondary"
      sx={{
        textTransform: 'initial',
        width: 300,
        height: 300,
        fontSize: 30,
      }}
    >{quiz}</Button>
  </Link>
  )
}
export default QuizTile;