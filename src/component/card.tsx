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
  return (
    <div>
      {data.map((card) => (
        <div key={card.id}>
          <h1>{card.name}</h1>
          <button
            onClick={() => {
              mutate.mutate(card.id)
            }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  )
}
