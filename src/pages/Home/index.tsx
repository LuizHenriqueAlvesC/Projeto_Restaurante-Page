import Footer from '../../components/Footer'
import Header from '../../components/Header'
import RestaurantsList from '../../components/RestaurantsList'
import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurantes, isLoading } = useGetRestaurantsQuery(undefined)

  return (
    <>
      <Header />
      <RestaurantsList isLoading={isLoading} restaurants={restaurantes} />
      <Footer />
    </>
  )
}

export default Home
