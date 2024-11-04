import Header from '../../components/Header'
import RestaurantsList from '../../components/RestaurantsList'
import MoldelRestaurants from '../../models/MoldelRestaurants'

import japonesa from '../../assets/japonesa.png'
import italiana from '../../assets/italiana.png'
import Footer from '../../components/Footer'

const restaurantes: MoldelRestaurants[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    avaliable: 4.9,
    image: japonesa,
    infos: ['Destaque da semana', 'japonesa']
  },
  {
    id: 2,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    avaliable: 4.6,
    image: italiana,
    infos: ['japonesa']
  },
  {
    id: 3,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    avaliable: 4.6,
    image: italiana,
    infos: ['japonesa']
  },
  {
    id: 4,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    avaliable: 4.6,
    image: italiana,
    infos: ['japonesa']
  },
  {
    id: 5,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    avaliable: 4.6,
    image: italiana,
    infos: ['japonesa']
  },
  {
    id: 6,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    avaliable: 4.6,
    image: italiana,
    infos: ['japonesa']
  }
]

const Home = () => (
  <>
    <Header />
    <RestaurantsList restaurants={restaurantes} />
    <Footer />
  </>
)

export default Home
