import { styled } from './styled'
import { space, SpaceProps } from 'styled-system'
import { theme } from '../theme'

export const List = styled.ul<SpaceProps>`
  margin-bottom: initial;
  ${space}
  padding-inline-start: 40px;
  @media (max-width: ${theme.breakpoints[0]}px) {
    padding-inline-start: 20px;
  }
`

export const OrderedList = styled.ol<SpaceProps>`
  ${space}
`

export const ListItem = styled.li<SpaceProps>`
  ${space}
`
