import { type NextPage } from "next"

import { api } from "../utils/api"
import { Card } from "../component/card"
import { Background } from "../component/background"
import { Header } from "../component/header"

const Home: NextPage = () => {
  const { data, refetch } = api.character.getAll.useQuery()

  return (
    <div>
      <Background />
      <Header refetch={refetch} />
      <Card refetch={refetch} data={data || []} />
    </div>
  )
}

export default Home
