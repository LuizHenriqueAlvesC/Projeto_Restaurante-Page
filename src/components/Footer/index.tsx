import { Description, FooterContain, Icon, IconSection, Logo } from './styles'

import logo from '../../assets/logo.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'

const Footer = () => (
  <FooterContain>
    <div className="container">
      <Logo src={logo} alt="" />
      <IconSection>
        <Icon src={instagram} alt="" />
        <Icon src={facebook} alt="" />
        <Icon src={twitter} alt="" />
      </IconSection>
      <Description>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Description>
    </div>
  </FooterContain>
)

export default Footer
