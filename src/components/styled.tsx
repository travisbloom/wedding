import baseStyled, { CreateStyled } from '@emotion/styled'
import { ThemeProvider as BaseThemeProvider, EmotionTheming } from 'emotion-theming'
import { ITheme } from '../theme'
export { css } from '@emotion/core'

export const styled = baseStyled as CreateStyled<ITheme>
export const ThemeProvider = BaseThemeProvider as EmotionTheming<ITheme>['ThemeProvider']
