import Header from '../../components/Header'
import RestaurantsList from '../../components/RestaurantsList'

import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'

export type ProductItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

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

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<RestaurantType[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Header />
      <RestaurantsList restaurants={restaurantes} />
      <Footer />
    </>
  )
}

export default Home
