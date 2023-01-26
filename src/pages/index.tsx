import { type NextPage } from "next"

import { api } from "../utils/api"
import { Card } from "../component/card"
import { AddCharacter } from "../component/add"
import { Background } from "../component/background"

const Home: NextPage = () => {
  const { data, refetch } = api.character.getAll.useQuery()

  return (
    <div>
      <Background />
      <Card refetch={refetch} data={data || []} />
      <AddCharacter refetch={refetch} />
    </div>
  )
}

export default Home
