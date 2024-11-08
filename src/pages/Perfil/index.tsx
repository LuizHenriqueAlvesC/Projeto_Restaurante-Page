import { useParams } from 'react-router-dom' // Importa o hook useParams do react-router-dom para acessar os parâmetros da URL

import Footer from '../../components/Footer' // Importa o componente Footer para exibir o rodapé da página
import ProductsList from '../../components/ProductList' // Importa o componente ProductsList para exibir a lista de produtos
import { useEffect, useState } from 'react'
import { ProductItem } from '../Home'
import ShoppHeader from '../../components/ShoppHeader'
import Hero from '../../components/Hero'

import italiana from '../../assets/pizza.png'

const produtos: ProductItem[] = [
  {
    id: 1,
    foto: italiana,
    nome: 'Pizza',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    porcao: 'serve de 2 a 3 pessoas',
    preco: 98.9
  },
  {
    id: 2,
    foto: italiana,
    nome: 'Pizza',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    porcao: 'serve de 2 a 3 pessoas',
    preco: 98.9
  },
  {
    id: 3,
    foto: italiana,
    nome: 'Pizza',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    porcao: 'serve de 2 a 3 pessoas',
    preco: 98.9
  },
  {
    id: 4,
    foto: italiana,
    nome: 'Pizza',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    porcao: 'serve de 2 a 3 pessoas',
    preco: 98.9
  },
  {
    id: 5,
    foto: italiana,
    nome: 'Pizza',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    porcao: 'serve de 2 a 3 pessoas',
    preco: 98.9
  },
  {
    id: 6,
    foto: italiana,
    nome: 'Pizza',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    porcao: 'serve de 2 a 3 pessoas',
    preco: 98.9
  }
]

// Componente Perfil que representa a página de perfil do restaurante
const Perfil = () => {
  // const { id } = useParams()
  // const [foodItems, setfoodItems] = useState<ProductItem[]>([])

  // useEffect(() => {
  //   if (id) {
  //     fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
  //       .then((res) => {
  //         if (!res.ok) {
  //           throw new Error('Network response was not ok')
  //         }
  //         return res.json()
  //       })
  //       .then((res) => setfoodItems(res))
  //       .catch((error) => console.error('Fetch error:', error))
  //   }
  // }, [id])

  return (
    <>
      <ShoppHeader />
      <Hero />
      <ProductsList products={produtos} />
      <Footer />
    </>
  )
}

export default Perfil
