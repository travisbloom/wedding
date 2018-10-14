import * as React from 'react';
import Media from 'react-media';
import { Sticky, StickyContainer } from 'react-sticky';
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
  width: 100%;
  object-fit: cover;
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
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
`;

const H1Container = styled(StickyContainer)`
  margin-top: calc(50vh - 32px);
  height: calc(100vh - 80px);
  width: 100%;
  text-align: center;
`;

const H1 = styled.h1`
  font-family: 'Parisienne', cursive;
  font-size: 32px;
`;

export class HeaderVideo extends React.Component {
  private video = React.createRef<HTMLVideoElement>();

  onClickOverlay = () => {
    if (this.video.current) {
      this.video.current.play();
    }
  };

  render() {
    return (
      <TopContentContainer>
        <Media query="(min-width: 768px)">
          {(matches: boolean) => (
            <TopContentVideo innerRef={this.video} autoPlay={true} muted={true} playsInline={true}>
              <source
                src={process.env.PUBLIC_URL + `/${matches ? 'proposal' : 'proposal-mobile'}.mp4`}
                type="video/mp4"
              />
              <img src={proposalImg} />
            </TopContentVideo>
          )}
        </Media>
        <TopContentOverlay onClick={this.onClickOverlay}>
          <H1Container>
            <Sticky>{({ style }) => <H1 style={style}>#BrideAndBloom</H1>}</Sticky>
          </H1Container>
        </TopContentOverlay>
      </TopContentContainer>
    );
  }
}
