import MoldelRestaurants from '../../models/MoldelRestaurants'
import Restaurants from '../Restaurants'

import { Container, List } from './styles'

export type Props = {
  restaurants: MoldelRestaurants[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurants.map((res) => (
          <Restaurants
            key={res.id}
            title={res.title}
            description={res.description}
            image={res.image}
            avaliable={res.avaliable}
            infos={res.infos}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantsList
