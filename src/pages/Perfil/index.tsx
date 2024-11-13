import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import ProductsList from '../../components/ProductList'
import { useEffect, useState } from 'react'
import { ProductItem, RestaurantType } from '../Home' // Certifique-se de importar RestaurantType
import ShoppHeader from '../../components/ShoppHeader'
import Hero from '../../components/Hero'

const Perfil = () => {
  const { id } = useParams()
  const [foodItems, setFoodItems] = useState<ProductItem[]>([])

  useEffect(() => {
    if (id) {
      fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok')
          }
          return res.json()
        })
        .then((res: RestaurantType) => setFoodItems(res.cardapio)) // Acessa a propriedade "cardapio" do restaurante
        .catch((error) => console.error('Fetch error:', error))
    }
  }, [id])

  return (
    <>
      <ShoppHeader />
      <Hero />
      <ProductsList products={foodItems} />
      <Footer />
    </>
  )
}

export default Perfil
