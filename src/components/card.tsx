import * as React from "react"
import {
  bgColor,
  BgColorProps,
  borderRadius,
  BorderRadiusProps,
  boxShadow,
  BoxShadowProps,
} from "styled-system"
import { IBaseBoxProps, Box } from "./box"
import { styled } from "./styled"

export interface ICardProps
  extends BorderRadiusProps,
    BgColorProps,
    BoxShadowProps {}

export const Card = styled(Box)<ICardProps>(borderRadius, bgColor, boxShadow)

Card.defaultProps = {
  p: 4,
  bg: "white",
  boxShadow:
    "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",
}
