import styled from 'styled-components'
import { Props } from '.'

export const Container = styled.section<Omit<Props, 'restaurants'>>`
  padding: 80px 0 120px 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
`
