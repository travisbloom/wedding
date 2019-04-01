import { style, ResponsiveValue } from 'styled-system'

export interface TextColorProps {
  color?: any
  // TODO re-enable once we figure out how to override default color attr
  // color?: ResponsiveValue<CSS.ColorProperty>
}
export const textColor = style({
  prop: 'color',
  key: 'colors',
})
