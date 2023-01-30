import styled from 'styled-components'
import { theme, TextVariants, ThemeColors } from '../../style/theme'

export type StyledTextProps = {
  as: TextVariants
  size?: number
  color: ThemeColors
  lineHeight: number
  bold: Boolean
  uppercase?: Boolean
}

export const StyledText = styled.p<StyledTextProps>`
  color: ${({ theme, color }) => theme.colors[color]};
  font-size: ${({ theme, as, size }) => {
    if (size) {
      return size
    } else {
      const fontSize = theme.textVariants[as].fontSize
      return theme.fontSizes[fontSize]
    }
  }}rem;
  line-height: ${({ theme, as, lineHeight }) =>
    lineHeight ? lineHeight : theme.textVariants[as].lineHeight};
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
`
