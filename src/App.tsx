import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify' // Importa o ToastContainer do react-toastify
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

import { GlobalCSS } from './styles'

import Rotas from './routes'
import { store } from './store'
import Footer from './components/Footer'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCSS />
        <Rotas />
        <Footer />
        <Cart />
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
