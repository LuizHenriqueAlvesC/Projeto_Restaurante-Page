import { Link } from 'react-router-dom'

import Tag from '../Tag'

import estrela from '../../assets/estrela.svg'
import {
  Descricao,
  TituloContainer,
  Titulo,
  CardInfo,
  Card,
  Infos,
  ButtonInfo
} from './styles'

type Props = {
  title: string
  description: string
  avaliable: number
  infos: string[]
  image: string
}

const Restaurants = ({
  title,
  description,
  infos,
  image,
  avaliable
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <CardInfo>
      <TituloContainer>
        <Titulo>{title}</Titulo>
        <p>
          {avaliable} <img src={estrela} />
        </p>
      </TituloContainer>
      <Descricao>{description}</Descricao>
      <ButtonInfo>
        <Link to="/shopp">Saiba mais</Link>
      </ButtonInfo>
    </CardInfo>
  </Card>
)

export default Restaurants
