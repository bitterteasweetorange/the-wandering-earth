import { Box, Typography, useMediaQuery } from "@mui/material"
import { AddCharacter, type AddCharacterProps } from "./add"

export function Header(props: AddCharacterProps) {
  const match = useMediaQuery("(max-width:600px)")
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: match ? 2 : 4,
        height: "144px",
      }}
    >
      <Typography variant={match ? "h2" : "h1"}>流浪地球</Typography>
      <AddCharacter refetch={props.refetch} />
    </Box>
  )
}
