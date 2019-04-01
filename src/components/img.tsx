import * as React from 'react'
import {
  borderRadius,
  BorderRadiusProps,
  height,
  HeightProps,
  alignSelf,
  flex,
  fontSize,
  order,
  space,
  width,
  bgColor,
} from 'styled-system'
import { IBaseBoxProps } from './box'
import { textColor } from './componentUtils'
import { styled } from './styled'

interface IBaseImgProps extends IBaseBoxProps, HeightProps, BorderRadiusProps {
  alt: string
}

export const Img = styled.img(
  {
    height: 'auto',
    maxWidth: '100%',
  },
  space,
  width,
  fontSize,
  textColor,
  bgColor,
  flex,
  order,
  alignSelf,
  height,
  borderRadius,
)

Img.defaultProps = {
  m: 0,
}
