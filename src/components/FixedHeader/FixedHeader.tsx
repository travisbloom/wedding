import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import { theme } from 'src/theme';
import styled from 'styled-components';
import { Box } from '../Box/Box';
import { ILinkProps, Link } from '../Link/Link';
import { AnimatedLogo } from './AnimatedLogo';

const FixedContainer = styled.div<{ hasBackground: boolean }>`
  display: flex;
  position: fixed;
  z-index: 1;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  color: white;
  width: 100%;
  transition: background-color 1s;
  background-color: ${props => (props.hasBackground ? 'rgb(0,0,0,.5)' : 'transparent')};
`;

const SectionLink: React.SFC<ILinkProps> = props => (
  <Route
    path={props.to}
    exact={true}
    children={({ match }) => (
      <Box mr={3}>
        <Link
          {...props}
          css={{
            textShadow: theme.textShadow,
            textDecoration: 'none',
            opacity: match ? 1 : 0.7,
            fontWeight: match ? 'bold' : 'inherit',
          }}
          color="white"
        />
      </Box>
    )}
  />
);

class FixedHeaderComponent extends React.Component<RouteComponentProps<any>> {
  render() {
    return (
      <FixedContainer hasBackground={this.props.location.pathname === '/gallery'}>
        <AnimatedLogo {...this.props} />
        <SectionLink to="/">Home</SectionLink>
        <SectionLink to="/proposal">The Proposal</SectionLink>
        <SectionLink to="/gallery">Gallery</SectionLink>
      </FixedContainer>
    );
  }
}

export const FixedHeader = withRouter(FixedHeaderComponent);
