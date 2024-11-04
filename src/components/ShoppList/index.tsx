import ModelShopp from '../../models/ModelShopp'
import ShoppItem from '../ShoppItem'
import { Container, List } from './styles'

export type Props = {
  itemshopp: ModelShopp[]
}

const ShoppList = ({ itemshopp }: Props) => (
  <Container>
    <div className="container">
      <ul>
        <List>
          {itemshopp.map((res) => (
            <ShoppItem
              key={res.id}
              title={res.title}
              description={res.description}
              image={res.image}
            />
          ))}
        </List>
      </ul>
    </div>
  </Container>
)

export default ShoppList
