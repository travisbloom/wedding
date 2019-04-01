import * as React from "react"
// @ts-ignore
import BackgroundImage from "gatsby-background-image"
import { Box } from "../components/box"
import { Heading } from "../components/heading"
import { Img } from "../components/img"
import { styled } from "../components/styled"
import { graphql } from "gatsby"
import { IGatsbyImageContent } from "../types"
import GatsbyImage, { FluidObject } from "gatsby-image"
import { SEO } from "../components/seo"

const HeaderContainer = styled(BackgroundImage)<{
  fluid: FluidObject
}>`
  background-size: cover;
  background-position: 29%;
  height: calc(100vh - 58px);
`

const Registry: React.SFC<{
  data: {
    headerImage: IGatsbyImageContent
    crateAndBarrelImage: IGatsbyImageContent
    targetImage: IGatsbyImageContent
    westElmImage: IGatsbyImageContent
    amazonImage: IGatsbyImageContent
  }
}> = ({ data }) => {
  return (
    <>
      <SEO title="Registry" />
      <HeaderContainer fluid={data.headerImage.childImageSharp.fluid!} />
      <Box py={6} px={3} css={{ margin: "0 auto", textAlign: "center" }}>
        <Heading fontSize={4} pb={4} css={{ textDecoration: "underline" }}>
          Registry
        </Heading>
        {[
          {
            src: data.amazonImage,
            href: "https://smile.amazon.com/wedding/share/travandmeghan",
            alt: "Amazon Logo",
          },
          {
            src: data.targetImage,
            href: "http://tgt.gifts/travisandmeghan",
            alt: "Target Logo",
          },
          {
            src: data.crateAndBarrelImage,
            href:
              "https://www.crateandbarrel.com/gift-registry/meghan-ledan-and-travis-bloom/r5932719",
            alt: "Crate And Barrel Logo",
          },
          {
            src: data.westElmImage,
            href:
              "https://www.westelm.com/registry/nfr9mvn5fp/registry-list.html",
            alt: "West Elm Logo",
          },
        ].map(({ href, alt, src }) => (
          <Box
            key={alt}
            css={{ maxWidth: "300px", textAlign: "center" }}
            mx="auto"
            my={4}
          >
            <a href={href} target="_blank">
              <GatsbyImage fixed={src.childImageSharp.fixed!} alt={alt} />
            </a>
          </Box>
        ))}
      </Box>
    </>
  )
}

export default Registry

export const query = graphql`
  query RegistryPage {
    headerImage: file(relativePath: { eq: "registry-header-image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    crateAndBarrelImage: file(
      relativePath: { eq: "registry-logos/crateAndBarrel.png" }
    ) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    targetImage: file(relativePath: { eq: "registry-logos/target.png" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    westElmImage: file(relativePath: { eq: "registry-logos/westElm.png" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    amazonImage: file(relativePath: { eq: "registry-logos/amazon.png" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`
