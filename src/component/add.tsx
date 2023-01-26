import { Button } from "@mui/material"
import { api } from "../utils/api"

export type AddCharacterProps = {
  refetch: () => Promise<unknown>
}
export function AddCharacter({ refetch }: AddCharacterProps) {
  const add = api.character.create.useMutation({
    onSuccess: async () => {
      await refetch()
    },
  })
  return (
    <Button
      onClick={() => {
        add.mutate({
          name: "test",
          description: "test",
          episode: "ONE",
        })
      }}
    >
      add
    </Button>
  )
}
