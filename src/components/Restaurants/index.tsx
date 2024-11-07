import Button from '../Button'
import Tag from '../Tag'

import star from '../../assets/estrela.svg'

import {
  RestaurantCard,
  Image,
  InfosTag,
  Infos,
  Title,
  Grade,
  Description
} from './styles'
import { RestaurantType } from '../../pages/Home'

const Restaurant = ({
  id,
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa
}: RestaurantType) => (
  <RestaurantCard>
    <Image style={{ backgroundImage: `url(${capa})` }}>
      <InfosTag className={'message'}>
        {destacado ? (
          <>
            <Tag size="small">Destaque da semana</Tag>
            <Tag size="small">{tipo}</Tag>
          </>
        ) : (
          <Tag size="big">{tipo}</Tag>
        )}
      </InfosTag>
    </Image>
    <Infos>
      <div>
        <Title>{titulo}</Title>
        <div>
          <Grade>{avaliacao}</Grade>
          <img src={star} alt="Estrela" />
        </div>
      </div>
      <Description>{descricao}</Description>
      <div>
        <Button
          title="Clique aqui para ver os pratos servidos pelo restaurante"
          type="link"
          to={`restaurant/${id}`}
        >
          Saiba mais
        </Button>
      </div>
    </Infos>
  </RestaurantCard>
)

export default Restaurant
