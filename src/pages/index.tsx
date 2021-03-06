import * as React from "react"
import Media from "react-media"
import { withPrefix, graphql } from "gatsby"
import { styled } from "../components/styled"
import { Heading } from "../components/heading"
import { IGatsbyImageContent } from "../types"
import GatsbyImage from "gatsby-image"
import { SEO } from "../components/seo"
import { Box } from "../components/box"
import { InternalLink, ExternalLink } from "../components/link"
const TopContentContainer = styled.div`
  position: relative;
  z-index: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`

const TopContentVideo = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
`

const TopContentOverlay = styled.div`
  z-index: 10;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
`

class EasterEggHeader extends React.Component<
  {},
  { clickCount: number; easterEggTriggered: boolean }
> {
  clickTimeout?: number
  state = {
    clickCount: 0,
    easterEggTriggered: false,
  }
  handleClick = () => {
    this.setState(state => ({ clickCount: state.clickCount + 1 }))
    if (this.clickTimeout) {
      window.clearTimeout(this.clickTimeout)
    }
    this.clickTimeout = window.setTimeout(this.triggerEasterEgg, 800)
  }

  triggerEasterEgg = () => {
    const { clickCount, easterEggTriggered } = this.state
    if (clickCount === 9 && !easterEggTriggered) {
      this.setState({ easterEggTriggered: true })
    } else {
      this.setState({ easterEggTriggered: false, clickCount: 0 })
    }
  }

  render() {
    if (this.state.easterEggTriggered) {
      return <Heading onClick={this.handleClick}>LEWIS!</Heading>
    }
    return (
      <Heading fontFamily="serif" onClick={this.handleClick}>
        #BrideAndBloom
      </Heading>
    )
  }
}

export default class Home extends React.Component<{
  data: { headerImage: IGatsbyImageContent }
}> {
  private video: any = React.createRef<HTMLVideoElement>()

  onClickOverlay = () => {
    if (this.video.current) {
      this.video.current.play()
    }
  }

  render() {
    return (
      <TopContentContainer>
        <SEO title="Home" />
        <Media query="(min-width: 768px)">
          {(matches: boolean) => (
            <TopContentVideo
              ref={this.video}
              autoPlay={true}
              muted={true}
              playsInline={true}
            >
              <source
                src={withPrefix(
                  `/${matches ? "proposal" : "proposal-mobile"}.mp4`
                )}
                type="video/mp4"
              />
              <GatsbyImage
                fluid={this.props.data.headerImage.childImageSharp.fluid}
              />
            </TopContentVideo>
          )}
        </Media>
        <TopContentOverlay onClick={this.onClickOverlay}>
          <Box style={{ textAlign: "center" }} mx={2}>
            <EasterEggHeader />
            <Heading as="h2" mt={2} mb={1}>
              September 7th, 2019
            </Heading>
            <Heading as="h2">
              Saint Clements Castle & Marina, Portland, CT
            </Heading>
          </Box>
        </TopContentOverlay>
      </TopContentContainer>
    )
  }
}

export const query = graphql`
  query IndexPage {
    headerImage: file(relativePath: { eq: "homepage-proposal.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
