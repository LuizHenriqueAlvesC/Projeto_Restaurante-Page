import { createSlice, PayloadAction } from '@reduxjs/toolkit' // Importa funções para criar slices e definir ações com payload

// Define o tipo ModalState que representa o estado do modal
type ModalState = {
  item: ProductItem // Item do tipo ProductType que será exibido no modal
  isOpen: boolean // Indica se o modal está aberto ou fechado
}

// Estado inicial do modal
const initialState: ModalState = {
  item: {
    foto: '',
    preco: 0,
    id: 0,
    nome: '',
    descricao: '',
    porcao: ''
  },
  isOpen: false // Inicialmente, o modal está fechado
}

// Cria o slice do modal usando createSlice
const modalSlice = createSlice({
  name: 'modal', // Nome do slice
  initialState, // Estado inicial do slice
  reducers: {
    // Redutor para adicionar um item ao modal
    add: (state, action: PayloadAction<ProductItem>) => {
      state.item = action.payload
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

// Exporta as ações geradas automaticamente pelo slice
export const { add, open, close } = modalSlice.actions

// Exporta o redutor do slice como padrão
export default modalSlice.reducer
