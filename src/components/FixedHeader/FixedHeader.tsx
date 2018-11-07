import * as React from 'react';
import { Route } from 'react-router-dom';
import { theme } from 'src/theme';
import styled from 'styled-components';
import { Box } from '../Box/Box';
import { ILinkProps, Link } from '../Link/Link';
import { AnimatedLogo } from './AnimatedLogo';

const FixedContainer = styled.div`
  display: flex;
  position: fixed;
  z-index: 1;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  color: white;
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

export class FixedHeader extends React.Component<{}> {
  render() {
    return (
      <FixedContainer>
        <AnimatedLogo />
        <SectionLink to="/">Home</SectionLink>
        <SectionLink to="/gallery">Gallery</SectionLink>
        <SectionLink to="/proposal">The Proposal</SectionLink>
      </FixedContainer>
    );
  }
}
