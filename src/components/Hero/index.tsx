import { useParams } from 'react-router-dom'

import { useEffect, useState } from 'react'
import { RestaurantType } from '../../pages/Home'
import { PresentationContainer, Title } from './styles'

// Componente Presentation que exibe a apresentação do restaurante
const Presentation = () => {
  // Obtém o parâmetro 'id' da URL
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<RestaurantType>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  return (
    // Container principal da apresentação do restaurante
    <PresentationContainer
      style={{ backgroundImage: `url(${restaurant?.capa})` }} // Define a imagem de fundo do container
    >
      <div className="background">
        <div className="container">
          {/* Exibe o tipo do restaurante */}
          <span>{restaurant?.tipo}</span>
          {/* Exibe o título do restaurante */}
          <Title>{restaurant?.titulo}</Title>
        </div>
      </div>
    </PresentationContainer>
  )
}

export default Presentation
