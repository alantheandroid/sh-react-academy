export const theme = {
  colors: {
    primary: '#f9423a',
    primaryLight: '#feeceb',
    secondary: '#f7f8fb',
    secondaryLight: '#2d3748',
    grayShadowed: 'rgba(247, 247, 247, 0.5)',
    gold: '#fcba03',
    textDark: '#282828',
    textLight: '#ffffff',
    lightGray: '#cccccc',
    transparent: 'transparent'
  },
  fontSizes: {
    xs: 0.8,
    sm: 0.9,
    base: 1,
    md: 1.4,
    lg: 1.8,
    xl: 2
  }
}

export type Theme = typeof theme

export type ThemeColors = keyof Theme['colors']

export type ThemeFontSizes = keyof Theme['fontSizes']
