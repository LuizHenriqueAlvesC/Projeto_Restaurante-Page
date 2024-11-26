import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Overlay, CartContainer } from '../Cart/styles'

import * as S from './styles'

import InputMask from 'react-input-mask'
import { Row } from './styles'
import { usePurchaseMutation } from '../../services/api'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  closeConfirmation,
  closeDelivery,
  closePayment,
  openConfirmation,
  openDelivery,
  openPayment
} from '../../store/reducers/checkout'
import { open, cleanCart } from '../../store/reducers/cart'
import { formataPreco, getTotalPrice } from '../../utils'
import Loader from '../Loader'

const Checkout = () => {
  const dispatch = useDispatch()
  const [purchase, { data, isLoading }] = usePurchaseMutation()
  const { deliveryIsOpen, paymentIsOpen, confirmationIsOpen } = useSelector(
    (state: RootReducer) => state.checkout
  )
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [error, setError] = useState<string | null>(null)

  const form = useFormik({
    initialValues: {
      receiver: '',
      adress: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      nameOnCard: '',
      cardNumber: '',
      cardSecurityCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(3, 'O nome receptor precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      adress: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'A cidade precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(9, 'O CEP precisa ter 8 caracteres')
        .max(9, 'O CEP precisa ter 8 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string()
        .min(1, 'O número precisa ter pelo menos um caractere')
        .required('O campo é obrigatório'),
      nameOnCard: Yup.string()
        .min(5, 'O nome no cartão deve ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(19, 'O número do cartão deve ter 16 dígitos')
        .max(19, 'O número do cartão deve ter 16 dígitos')
        .required('O campo é obrigatório'),
      cardSecurityCode: Yup.string()
        .min(3, 'O código de segurança deve ter 3 dígitos')
        .max(3, 'O código de segurança deve ter 3 dígitos')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .min(2, 'O mês de vencimento deve ter 2 dígitos')
        .max(2, 'O mês de vencimento deve ter 2 dígitos')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .min(2, 'O ano de vencimento deve ter 2 dígitos')
        .max(2, 'O ano de vencimento deve ter 2 dígitos')
        .required('O campo é obrigatório')
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await purchase({
          products: items.map((item) => ({
            id: item.id,
            price: item.preco
          })),
          delivery: {
            receiver: values.receiver,
            address: {
              description: values.receiver,
              city: values.city,
              zipCode: values.zipCode,
              number: Number(values.number),
              complement: values.complement
            }
          },
          payment: {
            card: {
              name: values.nameOnCard,
              number: values.cardNumber,
              code: Number(values.cardSecurityCode),
              expires: {
                month: Number(values.expiresMonth),
                year: Number(values.expiresYear)
              }
            }
          }
        }).unwrap()
        dispatch(closePayment())
        dispatch(openConfirmation())
        resetForm()
      } catch {
        setError('Erro ao processar a compra, tente novamente.')
      }
    }
  })

  const verifyFields = (fields: Array<keyof typeof form.values>) => {
    for (const field of fields) {
      if (!form.values[field]) {
        return false
      }
    }
    return true
  }

  const showInfosPayment = () => {
    if (verifyFields(['receiver', 'adress', 'city', 'zipCode', 'number'])) {
      dispatch(closeDelivery())
      dispatch(openPayment())
    } else {
      setError('Por favor, preencha todos os campos obrigatórios.')
    }
  }

  const showInfosDelivery = () => {
    dispatch(closePayment())
    dispatch(openDelivery())
  }

  const showInfosConfirmation = () => {
    form.handleSubmit()
    if (form.isValid) {
      dispatch(closePayment())
      dispatch(openConfirmation())
    } else {
      setError('Por favor, preencha todos os campos obrigatórios.')
    }
  }

  const openCart = () => {
    dispatch(closeDelivery())
    dispatch(open())
  }

  const closeCart = () => {
    dispatch(closeDelivery())
  }

  const closeCheckout = () => {
    dispatch(cleanCart())
    dispatch(closeConfirmation())
  }

  return (
    <>
      <form onSubmit={form.handleSubmit}>
        <CartContainer className={deliveryIsOpen ? 'is-open' : ''}>
          <Overlay onClick={closeCart}></Overlay>
          <S.AsideCheckout>
            <S.Title>Entrega</S.Title>
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            <S.InputGroup>
              <label htmlFor="receiver">Quem irá receber</label>
              <input
                className={form.errors.receiver ? 'error' : ''}
                type="text"
                id="receiver"
                name="receiver"
                value={form.values.receiver}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="">Endereço</label>
              <input
                className={form.errors.receiver ? 'error' : ''}
                type="text"
                id="adress"
                name="adress"
                value={form.values.adress}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="">Cidade</label>
              <input
                className={form.errors.receiver ? 'error' : ''}
                type="text"
                id="city"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
            <Row>
              <S.InputGroup>
                <label htmlFor="">CEP</label>
                <InputMask
                  className={form.errors.receiver ? 'error' : ''}
                  type="text"
                  id="cep"
                  name="cep"
                  value={form.values.zipCode}
                  onChange={(e) => {
                    form.handleChange(e)
                    form.setFieldValue('zipCode', e.target.value)
                  }}
                  onBlur={form.handleBlur}
                  mask="99999-999"
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="">Número</label>
                <input
                  className={form.errors.receiver ? 'error' : ''}
                  type="text"
                  id="number"
                  name="number"
                  value={form.values.number}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.InputGroup>
            </Row>
            <S.InputGroup>
              <label htmlFor="">Complemento (opcional)</label>
              <input
                className={form.errors.receiver ? 'error' : ''}
                type="text"
                id="complement"
                name="complement"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
            <S.ButtonCheckout
              $marginTop="24px"
              title="Clique aqui para continuar com o pagamento"
              type="button"
              onClick={showInfosPayment}
            >
              Continuar com o pagamento
            </S.ButtonCheckout>
            <S.ButtonCheckout
              title="Clique aqui para continuar com o pagamento"
              type="button"
              onClick={openCart}
            >
              Voltar ao carrinho
            </S.ButtonCheckout>
          </S.AsideCheckout>
        </CartContainer>

        <CartContainer className={paymentIsOpen ? 'is-open' : ''}>
          <Overlay onClick={closeCheckout} />
          <S.AsideCheckout>
            <S.Title>
              Pagamento - Valor a pagar {formataPreco(getTotalPrice(items))}
            </S.Title>
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            <S.InputGroup>
              <label htmlFor="nameOnCard">Nome no cartão</label>
              <input
                className={form.errors.nameOnCard ? 'error' : ''}
                type="text"
                id="nameOnCard"
                name="nameOnCard"
                value={form.values.nameOnCard}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
            <S.Row $columnGap="30px">
              <S.InputGroup $maxWidth="228px">
                <label htmlFor="cardNumber">Número do cartão</label>
                <InputMask
                  className={form.errors.cardNumber ? 'error' : ''}
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="9999 9999 9999 9999"
                />
              </S.InputGroup>
              <S.InputGroup $maxWidth="87px">
                <label htmlFor="cardSecurityCode">CVV</label>
                <InputMask
                  className={form.errors.cardSecurityCode ? 'error' : ''}
                  type="text"
                  id="cardSecurityCode"
                  name="cardSecurityCode"
                  value={form.values.cardSecurityCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="999"
                />
              </S.InputGroup>
            </S.Row>
            <S.Row>
              <S.InputGroup>
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <InputMask
                  type="text"
                  className={form.errors.expiresMonth ? 'error' : ''}
                  id="expiresMonth"
                  name="expiresMonth"
                  value={form.values.expiresMonth}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="99"
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <InputMask
                  className={form.errors.expiresYear ? 'error' : ''}
                  type="text"
                  id="expiresYear"
                  name="expiresYear"
                  value={form.values.expiresYear}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="99"
                />
              </S.InputGroup>
            </S.Row>
            <S.ButtonCheckout
              $marginTop="24px"
              title="Clique aqui para continuar com o pagamento"
              type="button"
              onClick={showInfosConfirmation}
            >
              {isLoading ? 'Finalizando pagamento...' : 'Finalizar pagamento'}
            </S.ButtonCheckout>
            <S.ButtonCheckout
              title="Clique aqui para continuar com o pagamento"
              type="button"
              onClick={showInfosDelivery}
            >
              Voltar ao carrinho
            </S.ButtonCheckout>
          </S.AsideCheckout>
        </CartContainer>
      </form>

      <CartContainer className={confirmationIsOpen ? 'is-open' : ''}>
        <Overlay onClick={closeCheckout} />
        <S.AsideCheckout>
          <S.ContainerOrder>
            {data ? (
              <>
                <S.Title>Pedido realizado - {data.orderId}</S.Title>
                <p>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido.
                </p>
                <p>
                  Gostaríamos de ressaltar que nossos entregadores não estão
                  autorizados a realizar cobranças extras.
                </p>
                <p>
                  Lembre-se da importância de higienizar as mãos após o
                  recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição.
                </p>
                <p>
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </p>
                <S.ButtonCheckout
                  title="Clique aqui para continuar com o pagamento"
                  type="button"
                  onClick={closeCheckout}
                >
                  Concluir
                </S.ButtonCheckout>
              </>
            ) : (
              <Loader />
            )}
          </S.ContainerOrder>
        </S.AsideCheckout>
      </CartContainer>
    </>
  )
}

export default Checkout
