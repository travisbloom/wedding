import * as React from "react"
import headerImage from "../../content/assets/info-page-header-image.jpg"
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
import { Txt } from "../components/txt"
import { theme } from "../theme"

const HeaderContainer = styled.div`
  background-image: url(${headerImage});
  background-size: cover;
  background-position: 50%;
  height: calc(100vh - 58px);
`

const GridRow: React.SFC<{ label: string }> = ({ label, children }) => (
  <Flex
    alignItems={["flex-start", "center"]}
    mb={4}
    flexDirection={["column", "row"]}
  >
    <Box flex={[1, "0 0 150px"]}>
      <Txt fontFamily="serif" fontSize={3}>
        {label}:
      </Txt>
    </Box>
    <Box flex={1}>{children}</Box>
  </Flex>
)

const Event: React.SFC<{
  heading: React.ReactNode
  where: React.ReactNode
  when?: React.ReactNode
  details: React.ReactNode
}> = ({ heading, when, where, details }) => (
  <Box css={{ maxWidth: 750 }} mx="auto" my={[4, 5]} px={3}>
    <Heading fontSize={4} as="h1" fontFamily="serif" mb={1}>
      {heading}
    </Heading>
    {when && <GridRow label="When">{when}</GridRow>}
    <GridRow label="Where">{where}</GridRow>
    <GridRow label="Details">{details}</GridRow>
  </Box>
)

const StClementsEvent: React.SFC<{}> = () => (
  <Event
    heading={"Ceremony and Reception"}
    when={
      <>
        Saturday, September 7th, 2019 <br />
        Ceremony begins at 5:30pm <br />
        Reception immediately to follow
      </>
    }
    where={
      <>
        <Box>Saint Clements Castle & Marina</Box>
        <Box mb={1} itemProp="streetAddress">
          1931 Portland-Cobalt Rd
        </Box>
        <Box mb={1}>
          <span itemProp="addressLocality">Portland</span>,{" "}
          <span itemProp="addressRegion">CT</span>{" "}
          <span itemProp="postalCode">06480</span>
        </Box>
        <ExternalLink
          target="_blank"
          href="https://www.google.com/maps/place/Saint+Clements+Castle+%26+Marina/@41.5602033,-72.5660499,18z/data=!4m19!1m13!4m12!1m4!2m2!1d-73.9705538!2d40.7500007!4e1!1m6!1m2!1s0x89e6485575dd1441:0x5b7dbbbeed6e6d18!2sst+clements+castle!2m2!1d-72.5649483!2d41.560808!3m4!1s0x89e6485575dd1441:0x5b7dbbbeed6e6d18!8m2!3d41.560808!4d-72.5649483"
        >
          <Box mt={2}>Get Directions</Box>
        </ExternalLink>
      </>
    }
    details={
      <>
        Cocktail attire recommended.
        <br />
        Ceremony will be held in the garden, weather permitting.
      </>
    }
  />
)

const Accommodations: React.SFC<{}> = () => (
  <Event
    heading={"Accommodations"}
    where={
      <>
        <Box
          className="adr"
          itemProp="address"
          itemType="http://schema.org/PostalAddress"
        >
          <Box mb={1}>Courtyard by Marriott Hartford Cromwell</Box>
          <Box mb={1} itemProp="streetAddress">
            4 Sebethe Drive
          </Box>
          <Box mb={1}>
            <span itemProp="addressLocality">Cromwell</span>,{" "}
            <span itemProp="addressRegion">CT</span>{" "}
            <span itemProp="postalCode">06416</span>
          </Box>
        </Box>
        <ExternalLink
          target="_blank"
          href="https://www.google.com/maps?q=courtyard+hartford+cromwell&rlz=1C5CHFA_enUS721US724&um=1&ie=UTF-8&sa=X&ved=0ahUKEwigtK7I1sPeAhXKjVkKHeEpAYAQ_AUIEygB"
        >
          <Box mt={2}>Get Directions</Box>
        </ExternalLink>
      </>
    }
    details={
      <>
        To reserve a room, please call{" "}
        <ExternalLink itemProp="telephone" href="tel:8606351001">
          (860) 635-1001
        </ExternalLink>{" "}
        and reference the Ledan/Bloom wedding or
        <ExternalLink
          target="_blank"
          href="https://www.marriott.com/events/start.mi?id=1548686727865&key=GRP"
        >
          book through our online reservation page.
        </ExternalLink>
      </>
    }
  />
)

const BagelBrunch: React.SFC<{}> = () => (
  <Event
    heading={"Bagels and Coffee"}
    when={
      <>
        Sunday, September 8th, 2019 <br />
        Breakfast starts at 10:30am
      </>
    }
    where={
      <>
        <Box
          className="adr"
          itemProp="address"
          itemType="http://schema.org/PostalAddress"
        >
          <Box>Hosted by Larry and Diane Selnick</Box>
          <Box itemProp="streetAddress">181 Lancaster Way</Box>
          <Box mb={1}>
            <span itemProp="addressLocality">Cheshire</span>,{" "}
            <span itemProp="addressRegion">CT</span>{" "}
            <span itemProp="postalCode">06410</span>
          </Box>
        </Box>
        <ExternalLink
          target="_blank"
          href="https://goo.gl/maps/paYdPU98NVNF6XoT9"
        >
          <Box mt={2}>Get Directions</Box>
        </ExternalLink>
      </>
    }
    details={<>Please join us for bagels and coffee! Attire is casual.</>}
  />
)

const Divider: React.SFC<{}> = () => (
  <Box mx={4}>
    <Box
      css={{ border: `2px solid ${theme.colors.offblue}`, maxWidth: 800 }}
      mx="auto"
    />
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
      <Box fontSize={2} css={{ lineHeight: 1.2 }}>
        <SEO title="Details" />
        <HeaderContainer />
        <StClementsEvent />
        <Divider />
        <BagelBrunch />
        <Divider />
        <Accommodations />
        <GoogleMap />
      </Box>
    )
  }
}
