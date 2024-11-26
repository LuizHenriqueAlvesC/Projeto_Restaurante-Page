import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

type CartState = {
  items: ProductItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ProductItem>) => {
      const food = state.items.find((item) => item.id === action.payload.id)

      if (!food) {
        state.items.push(action.payload)
      } else {
        // Se o produto já estiver no carrinho, exibe uma notificação
        toast.warn('O produto já foi adicionado ao carrinho!')
      }
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    cleanCart: (state) => {
      state.items = []
    }
  }
})

export const { add, open, close, remove, cleanCart } = cartSlice.actions

export default cartSlice.reducer
