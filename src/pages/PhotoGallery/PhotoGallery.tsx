import * as React from 'react';
import Lightbox from 'react-images';
import Measure from 'react-measure';
import Gallery from 'react-photo-gallery';
import { Box } from 'src/components';

interface IPhoto {
  src: string;
  width: number;
  height: number;
}

const engagementPhotos: IPhoto[] = [
  { src: require('./photos/engagementphotos1.jpg'), width: 1, height: 1.5 },
  { src: require('./photos/engagementphotos2.jpg'), width: 1.5, height: 1 },
  { src: require('./photos/engagementphotos23.jpg'), width: 1, height: 1.5 },
  { src: require('./photos/engagementphotos26.jpg'), width: 1, height: 1.5 },
  { src: require('./photos/engagementphotos38.jpg'), width: 1, height: 1.5 },
  { src: require('./photos/engagementphotos40.jpg'), width: 1.5, height: 1 },
  { src: require('./photos/engagementphotos43.jpg'), width: 1.5, height: 1 },
  { src: require('./photos/engagementphotos85.jpg'), width: 1.5, height: 1 },
  { src: require('./photos/engagementphotos90.jpg'), width: 1, height: 1.5 },
  { src: require('./photos/engagementphotos98.jpg'), width: 1.5, height: 1 },
  { src: require('./photos/engagementphotos100.jpg'), width: 1, height: 1.5 },
  { src: require('./photos/engagementphotos106.jpg'), width: 1.5, height: 1 },
  { src: require('./photos/engagementphotos108.jpg'), width: 1, height: 1.5 },
  { src: require('./photos/engagementphotos120.jpg'), width: 1, height: 1.5 },
  { src: require('./photos/engagementphotos123.jpg'), width: 1.5, height: 1 },
  { src: require('./photos/engagementphotos133.jpg'), width: 1.5, height: 1 },
  { src: require('./photos/engagementphotos138.jpg'), width: 1.5, height: 1 },
  { src: require('./photos/engagementphotos158.jpg'), width: 1, height: 1.5 },
];

const photos: IPhoto[] = [
  { src: require('./photos/megsurprised.jpg'), width: 1.5, height: 1 },
  { src: require('./photos/kisseiffeltower.jpg'), width: 1, height: 1.5 },
  { src: require('./photos/megtraveiffeltower.jpg'), width: 1, height: 1.5 },
  { src: require('./photos/preengagement.jpg'), width: 1, height: 1.333 },
  { src: require('./photos/baquetteproposal.jpg'), width: 1, height: 1.5 },
  { src: require('./photos/engagementpartykiss.jpg'), width: 1.5, height: 1 },
  { src: require('./photos/ginnygirl.jpg'), width: 1.5, height: 1 },
  { src: require('./photos/proposal.jpg'), width: 1, height: 1.5 },
  { src: require('./photos/ring.jpg'), width: 1, height: 1.5 },
];

const allPhotos = [...engagementPhotos, ...photos];

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
      <Box>
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
                <Box pb={7}>
                  <Gallery photos={engagementPhotos} onClick={this.openLightbox} columns={columns} />
                </Box>
                <Gallery
                  photos={photos}
                  onClick={(event, object) =>
                    this.openLightbox(event, { ...object, index: engagementPhotos.length + object.index })
                  }
                  columns={columns}
                />
                <Lightbox
                  images={allPhotos}
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
      </Box>
    );
  }
}
