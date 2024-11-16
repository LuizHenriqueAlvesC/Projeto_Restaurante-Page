import { CartButton, ImagemFundo, Logo } from './styles'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

const ShoppHeader = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <ImagemFundo>
      <div className="container">
        <Link to="/">Restaurantes</Link>
        <Logo>
          <img src={logo} alt="" />
        </Logo>
        <CartButton onClick={openCart}>
          {items.length} produto(s) no carrinho
        </CartButton>
      </div>
    </ImagemFundo>
  )
}

export default ShoppHeader
