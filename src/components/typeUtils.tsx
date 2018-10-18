import * as React from 'react'
import { CSSProperties } from 'react'
import { Omit } from 'react-router'
import { AlignSelfProps, ColorProps, FlexProps, FontSizeProps, OrderProps, SpaceProps, WidthProps } from 'styled-system'

interface ICSSProp {
  css?: CSSProperties
}

export interface IBoxBaseProps
  extends ICSSProp,
    SpaceProps,
    WidthProps,
    FontSizeProps,
    ColorProps,
    FlexProps,
    OrderProps,
    AlignSelfProps {
  as?: React.ReactType | keyof JSX.IntrinsicElements
  theme?: any
}

export type OmitDOMProps<P extends any> = Omit<P, 'color' | 'width' | 'as' | 'height'>
