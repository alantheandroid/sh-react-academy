import { ReactNode } from 'react'
import { TextVariants, ThemeColors, ThemeFontSizes } from '../../style/theme'
import { StyledText, StyledTextProps } from './styled'

type Props = Partial<Omit<StyledTextProps, 'as'>> & {
  children: ReactNode
  variant?: TextVariants
}

export const Text = ({
  children,
  variant = 'p',
  size,
  color = 'textDark',
  lineHeight = 1.2,
  bold = false,
  uppercase = false
}: Props) => {
  return (
    <StyledText
      as={variant}
      size={size}
      color={color}
      lineHeight={lineHeight}
      bold={bold}
      uppercase={uppercase}
    >
      {children}
    </StyledText>
  )
}
