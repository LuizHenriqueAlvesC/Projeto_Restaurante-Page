// ShoppHeader.js
import { ImagemFundo, Logo } from './styles'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

const ShoppHeader = () => (
  <ImagemFundo>
    <div className="container">
      <Link to="/">Restaurantes</Link>
      <Logo>
        <img src={logo} alt="" />
      </Logo>
      <p>0 produto(s) no carrinho</p>
    </div>
  </ImagemFundo>
)

export default ShoppHeader
