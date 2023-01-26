import { Box } from "@mui/material"
import url from "../media/bg.jpg"

export function Background() {
  return (
    <Box
      component="img"
      alt="Background"
      src={url.src}
      sx={{
        width: "100vw",
        height: "100vh",
        objectFit: "cover",
        position: "absolute",
        zIndex: -1,
      }}
    ></Box>
  )
}
