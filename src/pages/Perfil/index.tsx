import { useParams } from 'react-router-dom'

import ProductsList from '../../components/ProductList'
import ShoppHeader from '../../components/ShoppHeader'
import Hero from '../../components/Hero'
import { useGetProductsQuery } from '../../services/api'

type RestaurantParams = {
  id: string
}

const Perfil = () => {
  const { id } = useParams() as RestaurantParams
  const { data: foodItems } = useGetProductsQuery(id)

  // const [foodItems, setFoodItems] = useState<ProductItem[]>([])

  // useEffect(() => {
  //   if (id) {
  //     fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
  //       .then((res) => {
  //         if (!res.ok) {
  //           throw new Error('Network response was not ok')
  //         }
  //         return res.json()
  //       })
  //       .then((res: RestaurantType) => setFoodItems(res.cardapio)) // Acessa a propriedade "cardapio" do restaurante
  //       .catch((error) => console.error('Fetch error:', error))
  //   }
  // }, [id])

  return (
    <>
      <ShoppHeader />
      <Hero />
      <ProductsList products={foodItems?.cardapio} />
    </>
  )
}

export default Perfil
