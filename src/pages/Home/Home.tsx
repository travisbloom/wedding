import * as React from 'react';
import Media from 'react-media';
import styled from 'styled-components';
import { Box, Heading } from '../../components';
import proposalImg from './proposal.jpg';
const TopContentContainer = styled.div`
  position: relative;
  z-index: 0;
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
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
`;

export class Home extends React.Component {
  private video: any = React.createRef<HTMLVideoElement>();

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
            <TopContentVideo ref={this.video} autoPlay={true} muted={true} playsInline={true}>
              <source
                src={process.env.PUBLIC_URL + `/${matches ? 'proposal' : 'proposal-mobile'}.mp4`}
                type="video/mp4"
              />
              <img src={proposalImg} />
            </TopContentVideo>
          )}
        </Media>
        <TopContentOverlay onClick={this.onClickOverlay}>
          <div style={{ textAlign: 'center' }}>
            <Heading fontFamily="serif">#BrideAndBloom</Heading>
            <Box mt={3} mb={1}>
              September 7th, 2019
            </Box>
            <div>Saint Clements Castle, Portland, CT</div>
          </div>
        </TopContentOverlay>
      </TopContentContainer>
    );
  }
}