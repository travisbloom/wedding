import * as React from "react"
import { Txt, IBaseTextProps } from "./txt"

interface IHeadingProps extends IBaseTextProps {
  as?: "h1" | "h2" | "h3"
}

export const Heading: React.SFC<React.ComponentPropsWithoutRef<typeof Txt>> = ({
  as,
  ...props
}) => <Txt fontSize={as === "h2" ? 2 : 3} as={as} {...props} />
Heading.defaultProps = {
  as: "h1",
  m: 0,
}
