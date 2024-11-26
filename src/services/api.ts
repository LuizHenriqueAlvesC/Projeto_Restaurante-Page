import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Product = {
  id: number // ID do produto
  price: number // Preço do produto
}

// Define o tipo OrderPayload que representa a estrutura do payload de um pedido
type OrderPayload = {
  products: Product[] // Lista de produtos no pedido
  delivery: {
    receiver: string // Nome do destinatário
    address: {
      description: string // Descrição do endereço
      city: string // Cidade
      zipCode: string // Código postal
      number: number // Número do endereço
      complement: string // Complemento do endereço
    }
  }
  payment: {
    card: {
      name: string // Nome no cartão
      number: string // Número do cartão
      code: number // Código de segurança do cartão
      expires: {
        month: number // Mês de expiração do cartão
        year: number // Ano de expiração do cartão
      }
    }
  }
}

type PurchaseResponse = {
  orderId: string // ID do pedido
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<RestaurantType[], undefined>({
      query: () => ''
    }),
    getProducts: builder.query<RestaurantType, string>({
      query: (id) => `${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, OrderPayload>({
      query: (body) => ({
        url: 'https://fake-api-tau.vercel.app/api/efood/checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantsQuery,
  useGetProductsQuery,
  usePurchaseMutation
} = api

export default api
