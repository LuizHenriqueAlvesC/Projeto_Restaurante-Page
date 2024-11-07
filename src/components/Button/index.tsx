import { StandardButton, LinkButton } from './styles'

type Props = {
  title: string
  type: 'button' | 'link' | 'submit'
  children: React.ReactNode
  to?: string
  disabled?: boolean
  onClick?: () => void
}

const Button = ({ title, type, children, to, disabled, onClick }: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <StandardButton title={title} onClick={onClick} disabled={disabled}>
        {children}
      </StandardButton>
    )
  }

  if (type === 'link' && to) {
    return (
      <LinkButton title={title} to={to}>
        {children}
      </LinkButton>
    )
  }

  return null
}

export default Button
