import {
  alpha,
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { type Character } from "@prisma/client"
import { api } from "../utils/api"

export function Card({
  data,
  refetch,
}: {
  refetch: () => Promise<unknown>
  data: Character[]
}) {
  const mutate = api.character.delete.useMutation({
    onSuccess: async () => {
      await refetch()
    },
  })

  const theme = useTheme()
  const match = useMediaQuery("(max-width:900px)")
  return (
    <Box
      sx={{
        display: "grid",
        alignContent: "start",
        gridTemplateColumns: match ? "400px" : "400px 400px",
        justifyContent: "center",
        gap: 4,
        height: "calc(100vh - 144px)",
        overflow: "scroll",
        padding: 4,
      }}
    >
      {data.map((card) => (
        <Box
          key={card.id}
          sx={{
            height: "200px",
            padding: 4,
            position: "relative",
            background: alpha(theme.palette.background.paper, 0.8),
            borderRadius: 4,
            "&:hover": {
              "& >button": {
                visibility: "visible",
              },
            },
          }}
        >
          <Typography color="error.main" variant="h4">
            {card.name}
          </Typography>
          <Typography color="primary.main" variant="body1">
            {card.description}
          </Typography>
          <Button
            onClick={() => {
              mutate.mutate(card.id)
            }}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              visibility: "hidden",
            }}
          >
            delete
          </Button>
        </Box>
      ))}
    </Box>
  )
}
