import * as React from 'react'
import * as Rebass from 'rebass'
import { BorderRadiusProps, HeightProps } from 'styled-system'
import { IBoxBaseProps, OmitDOMProps } from '../typeUtils'

interface IImageProps
  extends OmitDOMProps<React.HTMLProps<HTMLImageElement>>,
    IBoxBaseProps,
    HeightProps,
    BorderRadiusProps {}
export const Image: React.SFC<IImageProps> = Rebass.Image
