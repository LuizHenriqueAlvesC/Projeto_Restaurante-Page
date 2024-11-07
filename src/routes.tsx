import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Shopp from './pages/Perfil'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/:id" element={<Shopp />} />
  </Routes>
)

export default Rotas
