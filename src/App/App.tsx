import * as React from 'react';
import Media from 'react-media';
import styled from 'styled-components';
import proposalImg from './proposal.jpg';

const TopContentContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const TopContentVideo = styled.video`
  height: 100%;
  position: absolute;
  top: 0;
`;

const TopContentOverlay = styled.div`
  z-index: 10;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
`;

const H1 = styled.h1``;

export class App extends React.Component {
  public render() {
    return (
      <TopContentContainer>
        <Media query="(min-width: 599px)">
          {(matches: boolean) => (
            <TopContentVideo autoPlay={true} muted={true} loop={true} playsinline={true}>
              <source
                src={process.env.PUBLIC_URL + `/${matches ? 'proposal' : 'croppedProposal'}.mp4`}
                type="video/mp4"
              />
              <img src={proposalImg} />
            </TopContentVideo>
          )}
        </Media>
        <TopContentOverlay>
          <H1>#BrideAndBloom</H1>
        </TopContentOverlay>
      </TopContentContainer>
    );
  }
}
