import fundo from '../../assets/fundo2.png'
import { Imagem } from './styles'

const ShoppBanner = () => (
  <Imagem style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <p>Italiana</p>
      <div>
        <h4>La Dolce Vita Trattoria</h4>
      </div>
    </div>
  </Imagem>
)

export default ShoppBanner
