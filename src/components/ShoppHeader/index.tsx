// ShoppHeader.js
import { ImagemFundo, Logo } from './styles'
import bannerImg from '../../assets/fundo.png'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

const ShoppHeader = () => (
  <ImagemFundo style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Link to="/">Restaurantes</Link>
      <div>
        <Logo src={logo} alt="Logo" />
      </div>
      <p>0 produto(s) no carrinho</p>
    </div>
  </ImagemFundo>
)

export default ShoppHeader
