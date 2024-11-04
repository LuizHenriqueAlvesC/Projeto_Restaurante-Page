import { Button, Card, Descricao, Titulo } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const ShoppItem = ({ title, description, image }: Props) => (
  <Card>
    <div className="container">
      <img src={image} alt={title} />
      <div>
        <Titulo>{title}</Titulo>
        <Descricao>{description}</Descricao>
        <Button>Adicionar ao carrinho</Button>
      </div>
    </div>
  </Card>
)

export default ShoppItem
