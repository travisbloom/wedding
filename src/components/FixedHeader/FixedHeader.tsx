import * as React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { ILinkProps, Link } from '../Link/Link';
import { Text } from '../Text/Text';
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
    children={({ match }) =>
      match ? (
        <Link {...props} color="lightGray">
          <Text fontWeight="bold">{props.children}</Text>
        </Link>
      ) : (
        <Link {...props} />
      )
    }
  />
);

export class FixedHeader extends React.Component<{ index: number }> {
  render() {
    return (
      <FixedContainer>
        <AnimatedLogo index={this.props.index} />
        <SectionLink to="/">Home</SectionLink>
        <SectionLink to="/gallery">Gallery</SectionLink>
      </FixedContainer>
    );
  }
}
