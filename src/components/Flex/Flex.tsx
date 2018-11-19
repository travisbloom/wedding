import * as React from 'react'
import * as Rebass from 'rebass'
import { AlignItemsProps, FlexDirectionProps, FlexWrapProps, JustifyContentProps } from 'styled-system'
import { IBoxProps } from '../Box/Box'

interface IFlexProps extends IBoxProps, FlexWrapProps, FlexDirectionProps, AlignItemsProps, JustifyContentProps {}
export const Flex: React.SFC<IFlexProps> = Rebass.Flex
