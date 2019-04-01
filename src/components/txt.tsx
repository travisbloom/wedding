import * as React from 'react'
import {
  fontFamily,
  FontFamilyProps,
  fontWeight,
  FontWeightProps,
  letterSpacing,
  LetterSpacingProps,
  lineHeight,
  LineHeightProps,
  textAlign,
  TextAlignProps,
} from 'styled-system'
import { Box, IBaseBoxProps } from './box'
import { styled } from './styled'

export interface IBaseTextProps
  extends IBaseBoxProps,
    FontFamilyProps,
    FontWeightProps,
    TextAlignProps,
    LineHeightProps,
    LetterSpacingProps {}

export const Txt = styled(Box)<IBaseTextProps>(
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
)
