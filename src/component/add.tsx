import { api } from "../utils/api"

export function AddCharacter({ refetch }: { refetch: () => Promise<unknown> }) {
  const add = api.character.create.useMutation({
    onSuccess: async () => {
      await refetch()
    },
  })
  return (
    <button
      onClick={() => {
        add.mutate({
          name: "test",
          description: "test",
          episode: "ONE",
        })
      }}
    >
      add character
    </button>
  )
}
