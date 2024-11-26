import Loader from '../Loader'
import Restaurant from '../Restaurants'
import { List, RestaurantsSection } from './styles'

export type Props = {
  restaurants?: RestaurantType[]
  isLoading: boolean
}

const RestaurantsList = ({ restaurants, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <RestaurantsSection>
      <div className="container">
        <List>
          {restaurants?.map((restaurant) => (
            <Restaurant
              key={restaurant.id}
              id={restaurant.id}
              capa={restaurant.capa}
              titulo={restaurant.titulo}
              avaliacao={restaurant.avaliacao}
              destacado={restaurant.destacado}
              tipo={restaurant.tipo}
              descricao={restaurant.descricao}
              cardapio={restaurant.cardapio}
            />
          ))}
        </List>
      </div>
    </RestaurantsSection>
  )
}

export default RestaurantsList
