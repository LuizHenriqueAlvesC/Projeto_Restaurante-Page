import { useParams } from 'react-router-dom' // Importa o hook useParams do react-router-dom para acessar os parâmetros da URL

import Footer from '../../components/Footer' // Importa o componente Footer para exibir o rodapé da página
import ProductsList from '../../components/ProductList' // Importa o componente ProductsList para exibir a lista de produtos
import { useEffect, useState } from 'react'
import { ProductItem } from '../Home'
import ShoppHeader from '../../components/ShoppHeader'
import Hero from '../../components/Hero'

// Componente Perfil que representa a página de perfil do restaurante
const Perfil = () => {
  const { id } = useParams()
  const [foodItems, setfoodItems] = useState<ProductItem[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setfoodItems(res))
  }, [id])

  return (
    <>
      <ShoppHeader />
      <Hero />
      <ProductsList products={foodItems} />
      <Footer />
    </>
  )
}

export default Perfil
