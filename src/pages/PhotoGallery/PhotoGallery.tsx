import * as React from 'react';
import Lightbox from 'react-images';
import Measure from 'react-measure';
import Gallery from 'react-photo-gallery';

interface IPhoto {
  src: string;
  width: number;
  height: number;
}
const photos: IPhoto[] = [
  { src: require('./photos/megsurprised.jpg'), width: 1.5, height: 1 },
  { src: require('./photos/kisseiffeltower.jpg'), width: 1, height: 1.5 },
  { src: require('./photos/megtraveiffeltower.jpg'), width: 1, height: 1.5 },
  { src: require('./photos/preengagement.jpg'), width: 1, height: 1.333 },
  { src: require('./photos/baquetteproposal.jpg'), width: 1, height: 1.5 },
  { src: require('./photos/engagementpartykiss.jpg'), width: 1.5, height: 1 },
  { src: require('./photos/ginnygirl.jpg'), width: 1, height: 1.333 },
  { src: require('./photos/proposal.jpg'), width: 1, height: 1.5 },
  { src: require('./photos/ring.jpg'), width: 1, height: 1.5 },
  { src: require('./photos/zion.jpg'), width: 1.333, height: 1 },
];

export class PhotoGallery extends React.Component<
  {},
  { width: number; currentImage: number; lightboxIsOpen: boolean }
> {
  constructor(props) {
    super(props);
    this.state = { width: -1, currentImage: 0, lightboxIsOpen: false };
  }
  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  };
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  };
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  };
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  };
  render() {
    const width = this.state.width;
    return (
      <Measure bounds={true} onResize={contentRect => this.setState({ width: contentRect!.bounds!.width })}>
        {({ measureRef }) => {
          if (width < 1) {
            return <div ref={measureRef} />;
          }
          let columns = 1;
          if (width >= 480) {
            columns = 2;
          }
          if (width >= 1024) {
            columns = 3;
          }
          if (width >= 1824) {
            columns = 4;
          }
          return (
            <div ref={measureRef}>
              <Gallery photos={photos} onClick={this.openLightbox} columns={columns} />
              <Lightbox
                images={photos}
                onClose={this.closeLightbox}
                onClickPrev={this.gotoPrevious}
                onClickNext={this.gotoNext}
                currentImage={this.state.currentImage}
                isOpen={this.state.lightboxIsOpen}
              />
            </div>
          );
        }}
      </Measure>
    );
  }
}
