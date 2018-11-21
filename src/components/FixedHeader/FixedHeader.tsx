import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import { theme } from 'src/theme';
import styled from 'styled-components';
import { Box } from '../Box/Box';
import { ILinkProps, Link } from '../Link/Link';
import { AnimatedLogo } from './AnimatedLogo';

const FixedContainer = styled.div<{ isOnHomepage: boolean; pathname: string }>`
  display: flex;
  position: ${props => (props.isOnHomepage || props.pathname === '/proposal' ? 'absolute' : 'inline')};
  z-index: 1;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  color: ${props => (props.isOnHomepage ? 'white' : 'black')};
  width: 100%;
  top: 0;
  transition: color 1s;
`;

const SectionLink: React.SFC<ILinkProps & { isOnHomepage: boolean }> = ({ children, isOnHomepage, ...props }) => (
  <Route
    path={props.to}
    exact={true}
    children={({ match }) => (
      <Link
        {...props}
        css={{
          textDecoration: 'none',
          opacity: match ? 1 : 0.85,
          transition: 'all 1s',
          fontWeight: match ? 'bold' : 'inherit',
        }}
        color={isOnHomepage ? 'white' : 'black'}
      >
        <Box py={3} pr={[2, 3]}>
          {children}
        </Box>
      </Link>
    )}
  />
);

class FixedHeaderComponent extends React.Component<RouteComponentProps<any>> {
  render() {
    const sharedProps = { isOnHomepage: this.props.location.pathname === '/' };
    return (
      <FixedContainer {...sharedProps} pathname={this.props.location.pathname}>
        <AnimatedLogo {...this.props} {...sharedProps} />
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
      </FixedContainer>
    );
  }
}

export const FixedHeader = withRouter(FixedHeaderComponent);
