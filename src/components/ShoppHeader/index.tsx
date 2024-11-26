import { ImagemFundo, Logo, RestaurantLink } from './styles'
import logo from '../../assets/logo.svg'
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
        <RestaurantLink to="/">Restaurantes</RestaurantLink>
        <Logo>
          <h1>
            <img src={logo} alt="" />
          </h1>
        </Logo>
        <button onClick={openCart}>
          {items.length} produto(s) no carrinho
        </button>
      </div>
    </ImagemFundo>
  )
}

export default ShoppHeader
