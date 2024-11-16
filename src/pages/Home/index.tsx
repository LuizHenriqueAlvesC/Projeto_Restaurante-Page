import Header from '../../components/Header'
import RestaurantsList from '../../components/RestaurantsList'
import { useGetRestaurantsQuery } from '../../services/api'

// Define o tipo para o restaurante
export type RestaurantType = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: ProductItem[]
}
export type ProductItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Home = () => {
  const { data: restaurantes } = useGetRestaurantsQuery(undefined)
  if (restaurantes) {
    return (
      <>
        <Header />
        <RestaurantsList restaurants={restaurantes} />
      </>
    )
  }

  return <h4>Carregando</h4>
}

export default Home
