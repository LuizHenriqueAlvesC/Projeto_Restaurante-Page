import { useParams } from 'react-router-dom'

import ProductsList from '../../components/ProductList'
import ShoppHeader from '../../components/ShoppHeader'
import Hero from '../../components/Hero'
import { useGetProductsQuery } from '../../services/api'
import Footer from '../../components/Footer'

type RestaurantParams = {
  id: string
}

const Perfil = () => {
  const { id } = useParams() as RestaurantParams
  const { data: foodItems, isLoading } = useGetProductsQuery(id)

  return (
    <>
      <ShoppHeader />
      <Hero />
      <ProductsList isLoading={isLoading} products={foodItems?.cardapio} />
      <Footer />
    </>
  )
}

export default Perfil
