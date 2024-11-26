import styled from 'styled-components'
import { colors } from '../../styles'
import { SideBar } from '../Cart/styles'
import { StandardButton } from '../Button/styles'

type ButtonProps = {
  $marginTop?: string
}

type InputGroupProps = {
  $maxWidth?: string
}

type RowProps = {
  $columnGap?: string
}

export const Title = styled.h3`
  color: ${colors.lightGray};
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: ${(props) => (props.$columnGap ? props.$columnGap : '34px')};
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => (props.$maxWidth ? props.$maxWidth : 'auto')};

  label {
    color: ${colors.lightGray};
    font-size: 14px;
    font-weight: bold;
    display: block;
  }

  input {
    margin: 8px 0;
    padding: 0 8px;
    background-color: ${colors.lightGray};
    height: 32px;
    border: 1px solid ${colors.lightGray};
    width: 100%;
  }
`

export const ButtonCheckout = styled(StandardButton)<ButtonProps>`
  margin-bottom: 8px;
  margin-top: ${(props) => props.$marginTop || '0'};
`

export const ContainerOrder = styled.div`
  p {
    color: ${colors.lightGray};
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
`

export const AsideCheckout = styled(SideBar)`
  overflow-y: auto;
`

export const ErrorMessage = styled.p`
  color: ${colors.lightGray};
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 16px;
`
