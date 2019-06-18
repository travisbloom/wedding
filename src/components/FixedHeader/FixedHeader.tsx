import * as React from "react"
import Media from "react-media"
import { styled } from "../styled"
import { ILinkProps, InternalLink, ExternalLink } from "../link"
import { Box } from "../box"
import { Link, Match, RouteComponentProps } from "@reach/router"

const FixedContainer = styled.div<{ isOnHomepage: boolean; pathname: string }>`
  display: flex;
  position: ${props =>
    props.isOnHomepage || props.pathname === "/proposal"
      ? "absolute"
      : "inline"};
  z-index: 1;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  color: ${props => (props.isOnHomepage ? "white" : "black")};
  width: 100%;
  top: 0;
  transition: color 1s;
`

const SectionLink: React.SFC<ILinkProps & { isOnHomepage: boolean }> = ({
  children,
  isOnHomepage,
  ...props
}) => (
  <Match
    path={(props.to || props.href)!}
    children={({ match }) => {
      const LinkComponent = props.to ? InternalLink : ExternalLink
      return (
        <LinkComponent
          {...props}
          css={{
            textDecoration: "none",
            opacity: match ? 1 : 0.85,
            transition: "all 1s",
            fontWeight: match ? "bold" : "inherit",
          }}
          color={isOnHomepage ? "white" : "black"}
        >
          <Box py={3} pr={[2, 3]}>
            {children}
          </Box>
        </LinkComponent>
      )
    }}
  />
)

export class FixedHeader extends React.Component<RouteComponentProps<any>> {
  render() {
    const sharedProps = { isOnHomepage: this.props.location!.pathname === "/" }
    return (
      <FixedContainer {...sharedProps} pathname={this.props.location!.pathname}>
        <SectionLink {...sharedProps} to="/">
          Home
        </SectionLink>
        <SectionLink {...sharedProps} to="/info">
          Details
        </SectionLink>
        <SectionLink {...sharedProps} to="/proposal">
          Proposal
        </SectionLink>
        <SectionLink {...sharedProps} to="/registry">
          Registry
        </SectionLink>
        <SectionLink {...sharedProps} to="/gallery">
          Gallery
        </SectionLink>
        <SectionLink {...sharedProps} href="/rsvp" target="_blank">
          RSVP
        </SectionLink>
      </FixedContainer>
    )
  }
}
