import * as React from "react"
// @ts-ignore
import BackgroundImage from "gatsby-background-image"
import { GoogleMap } from "../components/GoogleMap"
import { styled } from "../components/styled"
import { Box } from "../components/box"
import { Heading } from "../components/heading"
import { ExternalLink } from "../components/link"
import { Flex } from "../components/flex"
import { graphql } from "gatsby"
import { IGatsbyImageContent } from "../types"
import { FluidObject } from "gatsby-image"
import { SEO } from "../components/seo"

const HeaderContainer = styled(BackgroundImage)<{
  fluid: FluidObject
}>`
  background-size: cover;
  background-position: 50%;
  height: calc(100vh - 58px);
`

const WeddingInfo: React.SFC<{}> = () => (
  <Box css={{ margin: "0 auto", textAlign: "center" }} pt={6} px={3}>
    <Heading fontSize={4} as="h1" fontFamily="serif" mb={1}>
      Saint Clements Castle & Marina
    </Heading>

    <Box mb={[3, 4]}>
      September 7th, 2019 <br />
      Ceremony begins at 5:30pm <br />
      Reception immediately to follow
    </Box>
    <Box mb={[3, 4]}>
      Cocktail attire recommended <br />
      Ceremony will be held in the garden, weather permitting
    </Box>
    <Box
      className="adr"
      itemProp="address"
      itemType="http://schema.org/PostalAddress"
    >
      <Box mb={1} itemProp="streetAddress">
        1931 Portland-Cobalt Rd
      </Box>
      <Box mb={1}>
        <span itemProp="addressLocality">Portland</span>,{" "}
        <span itemProp="addressRegion">CT</span>{" "}
        <span itemProp="postalCode">06480</span>
      </Box>
    </Box>
    <Box itemProp="telephone">(860) 342-0593</Box>
    <ExternalLink
      target="_blank"
      href="https://www.google.com/maps/place/Saint+Clements+Castle+%26+Marina/@41.5602033,-72.5660499,18z/data=!4m19!1m13!4m12!1m4!2m2!1d-73.9705538!2d40.7500007!4e1!1m6!1m2!1s0x89e6485575dd1441:0x5b7dbbbeed6e6d18!2sst+clements+castle!2m2!1d-72.5649483!2d41.560808!3m4!1s0x89e6485575dd1441:0x5b7dbbbeed6e6d18!8m2!3d41.560808!4d-72.5649483"
    >
      <Box py={3}>Get Directions</Box>
    </ExternalLink>
  </Box>
)

export default class Info extends React.Component<{
  data: {
    headerImage: IGatsbyImageContent
  }
}> {
  render() {
    const { data } = this.props
    return (
      <Box fontSize={2}>
        <SEO title="Details" />
        <HeaderContainer fluid={data.headerImage.childImageSharp.fluid!} />
        <WeddingInfo />
        <Flex
          pt={6}
          css={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
          flexWrap={["wrap", "nowrap"]}
        >
          <Box width={["100%", "50%"]} p={3}>
            <Heading fontSize={4} as="h1" fontFamily="serif" mb={[3, 4]}>
              Accommodations
            </Heading>
            <Box
              className="adr"
              itemProp="address"
              itemType="http://schema.org/PostalAddress"
            >
              <Box mb={1}>Courtyard Hartford Cromwell</Box>
              <Box mb={1} itemProp="streetAddress">
                4 Sebethe Drive
              </Box>
              <Box mb={1}>
                <span itemProp="addressLocality">Cromwell</span>,{" "}
                <span itemProp="addressRegion">CT</span>{" "}
                <span itemProp="postalCode">06416</span>
              </Box>
            </Box>
            <Box itemProp="telephone">(860) 635-1001</Box>
            <ExternalLink
              target="_blank"
              href="https://www.marriott.com/events/start.mi?id=1548686727865&key=GRP"
            >
              <Box pt={3} pb={1}>
                Book A Room At Our Group Rate
              </Box>
            </ExternalLink>
            <ExternalLink
              target="_blank"
              href="https://www.google.com/maps?q=courtyard+hartford+cromwell&rlz=1C5CHFA_enUS721US724&um=1&ie=UTF-8&sa=X&ved=0ahUKEwigtK7I1sPeAhXKjVkKHeEpAYAQ_AUIEygB"
            >
              <Box pt={1}>Get Directions</Box>
            </ExternalLink>
          </Box>
          <Box width={["100%", "50%"]} p={3}>
            <GoogleMap latLng={{ lat: 41.607199, lng: -72.706993 }} />
          </Box>
        </Flex>
      </Box>
    )
  }
}

export const query = graphql`
  query InfoPage {
    headerImage: file(relativePath: { eq: "info-page-header-image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
