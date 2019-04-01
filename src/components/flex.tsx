import * as React from 'react'
import {
  alignItems,
  AlignItemsProps,
  flexDirection,
  FlexDirectionProps,
  flexWrap,
  FlexWrapProps,
  justifyContent,
  JustifyContentProps,
  flexBasis,
  ResponsiveValue,
} from 'styled-system'
import { Box, IBaseBoxProps } from './box'
import { styled } from './styled'

export interface IBaseFlexProps
  extends IBaseBoxProps,
    FlexWrapProps,
    FlexDirectionProps,
    AlignItemsProps,
    JustifyContentProps {
  flexBasis?: ResponsiveValue<string | null>
}

export const Flex = styled(Box)<IBaseFlexProps>(
  {
    display: 'flex',
  },
  flexBasis,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
)
