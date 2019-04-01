import { FluidObject, FixedObject } from "gatsby-image"

export interface IGatsbyImageContent {
  childImageSharp: {
    fluid?: FluidObject
    fixed?: FixedObject
  }
}
