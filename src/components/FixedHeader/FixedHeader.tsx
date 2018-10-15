import * as React from 'react';
import styled from 'styled-components';
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

const SectionLink = styled.a`
  margin-right: 20px;
  display: block;
`;

export class FixedHeader extends React.Component<{ index: number }> {
  render() {
    return (
      <FixedContainer>
        <AnimatedLogo index={this.props.index} />
        <SectionLink>Details</SectionLink>
        <SectionLink>RSVP</SectionLink>
        <SectionLink>Registry</SectionLink>
        <SectionLink>Photos</SectionLink>
      </FixedContainer>
    );
  }
}
