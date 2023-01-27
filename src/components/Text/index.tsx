import { ReactNode } from 'react'
import { StyledText } from './styled'

type Props = {
  children: ReactNode
}

export const Text = ({ children }: Props) => {
  return <StyledText>{children}</StyledText>
}
