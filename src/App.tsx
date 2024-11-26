import { FC } from 'react'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify' // Importa o ToastContainer do react-toastify
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

import { GlobalCSS } from './styles'

import Rotas from './routes'
import { store } from './store'
import Cart from './components/Cart'
import Modal from './components/Modal'
import Checkout from './components/Checkout'

const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <GlobalCSS />
        </div>

        <Rotas />

        <Cart />

        <Checkout />

        <Modal />

        <ToastContainer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
