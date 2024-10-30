import { Imagem, Logo, Titulo } from './styles'

import bannerImg from '../../assets/fundo.png'
import logo from '../../assets/logo.svg'

const Header = () => (
  <>
    <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <div>
          <Logo src={logo} alt="" />
          <Titulo>
            Viva experiências gastronômicas no conforto da sua casa
          </Titulo>
        </div>
      </div>
    </Imagem>
  </>
)
export default Header
