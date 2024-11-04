import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Shopp from './pages/Shopp'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/shopp" element={<Shopp />} />
  </Routes>
)

export default Rotas
