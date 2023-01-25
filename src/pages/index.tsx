import { type NextPage } from "next"

import { api } from "../utils/api"
import { Card } from "../component/card"
import { AddCharacter } from "../component/add"

const Home: NextPage = () => {
  const { data, refetch } = api.character.getAll.useQuery()

  return (
    <div>
      <Card refetch={refetch} data={data || []} />
      <AddCharacter refetch={refetch} />
    </div>
  )
}

export default Home
