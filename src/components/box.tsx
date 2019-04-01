import React from 'react'
import {
  alignSelf,
  flex,
  fontSize,
  order,
  space,
  width,
  SpaceProps,
  WidthProps,
  FontSizeProps,
  FlexProps,
  OrderProps,
  AlignSelfProps,
  BgColorProps,
  bgColor,
} from 'styled-system'
import { TextColorProps, textColor } from './componentUtils'
import { styled } from './styled'

export interface IBaseBoxProps
  extends SpaceProps,
    WidthProps,
    FontSizeProps,
    TextColorProps,
    FlexProps,
    OrderProps,
    BgColorProps,
    AlignSelfProps {
  as?: any
}

export const Box = styled('div')<IBaseBoxProps>(
  space,
  width,
  fontSize,
  textColor,
  bgColor,
  flex,
  order,
  alignSelf,
)
