import * as React from "react"
import Lightbox from "react-images"
import Measure from "react-measure"
import ReactGallery, { PhotoClickHandler } from "react-photo-gallery"
import { Box } from "../components/box"
import { SEO } from "../components/seo"

interface IPhoto {
  src: string
  width: number
  height: number
}

const engagementPhotos: IPhoto[] = [
  {
    src: require("../../content/assets/photo-gallery/engagementphotos1.jpg"),
    width: 1,
    height: 1.5,
  },
  {
    src: require("../../content/assets/photo-gallery/engagementphotos2.jpg"),
    width: 1.5,
    height: 1,
  },
  {
    src: require("../../content/assets/photo-gallery/engagementphotos23.jpg"),
    width: 1,
    height: 1.5,
  },
  {
    src: require("../../content/assets/photo-gallery/engagementphotos26.jpg"),
    width: 1,
    height: 1.5,
  },
  {
    src: require("../../content/assets/photo-gallery/engagementphotos38.jpg"),
    width: 1,
    height: 1.5,
  },
  {
    src: require("../../content/assets/photo-gallery/engagementphotos40.jpg"),
    width: 1.5,
    height: 1,
  },
  {
    src: require("../../content/assets/photo-gallery/engagementphotos43.jpg"),
    width: 1.5,
    height: 1,
  },
  {
    src: require("../../content/assets/photo-gallery/engagementphotos85.jpg"),
    width: 1.5,
    height: 1,
  },
  {
    src: require("../../content/assets/photo-gallery/engagementphotos90.jpg"),
    width: 1,
    height: 1.5,
  },
  {
    src: require("../../content/assets/photo-gallery/engagementphotos98.jpg"),
    width: 1.5,
    height: 1,
  },
  {
    src: require("../../content/assets/photo-gallery/engagementphotos100.jpg"),
    width: 1,
    height: 1.5,
  },
  {
    src: require("../../content/assets/photo-gallery/engagementphotos106.jpg"),
    width: 1.5,
    height: 1,
  },
  {
    src: require("../../content/assets/photo-gallery/engagementphotos108.jpg"),
    width: 1,
    height: 1.5,
  },
  {
    src: require("../../content/assets/photo-gallery/engagementphotos120.jpg"),
    width: 1,
    height: 1.5,
  },
  {
    src: require("../../content/assets/photo-gallery/engagementphotos123.jpg"),
    width: 1.5,
    height: 1,
  },
  {
    src: require("../../content/assets/photo-gallery/engagementphotos133.jpg"),
    width: 1.5,
    height: 1,
  },
  {
    src: require("../../content/assets/photo-gallery/engagementphotos138.jpg"),
    width: 1.5,
    height: 1,
  },
  {
    src: require("../../content/assets/photo-gallery/engagementphotos158.jpg"),
    width: 1,
    height: 1.5,
  },
]

const photos: IPhoto[] = [
  {
    src: require("../../content/assets/photo-gallery/megsurprised.jpg"),
    width: 1.5,
    height: 1,
  },
  {
    src: require("../../content/assets/photo-gallery/kisseiffeltower.jpg"),
    width: 1,
    height: 1.5,
  },
  {
    src: require("../../content/assets/photo-gallery/megtraveiffeltower.jpg"),
    width: 1,
    height: 1.5,
  },
  {
    src: require("../../content/assets/photo-gallery/preengagement.jpg"),
    width: 1,
    height: 1.333,
  },
  {
    src: require("../../content/assets/photo-gallery/baquetteproposal.jpg"),
    width: 1,
    height: 1.5,
  },
  {
    src: require("../../content/assets/photo-gallery/engagementpartykiss.jpg"),
    width: 1.5,
    height: 1,
  },
  {
    src: require("../../content/assets/photo-gallery/ginnygirl.jpg"),
    width: 1.5,
    height: 1,
  },
  {
    src: require("../../content/assets/photo-gallery/proposal.jpg"),
    width: 1,
    height: 1.5,
  },
  {
    src: require("../../content/assets/photo-gallery/ring.jpg"),
    width: 1,
    height: 1.5,
  },
]

const allPhotos = [...engagementPhotos, ...photos]

export default class Gallery extends React.Component<
  {},
  { width: number; currentImage: number; lightboxIsOpen: boolean }
> {
  constructor(props: {}) {
    super(props)
    this.state = { width: -1, currentImage: 0, lightboxIsOpen: false }
  }
  openLightbox: PhotoClickHandler = (_, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  render() {
    const width = this.state.width
    return (
      <Box>
        <SEO title="Gallery" />
        <Measure
          bounds={true}
          onResize={contentRect =>
            this.setState({ width: contentRect!.bounds!.width })
          }
        >
          {({ measureRef }) => {
            if (width < 1) {
              return <div ref={measureRef} />
            }
            let columns = 1
            if (width >= 480) {
              columns = 2
            }
            if (width >= 1024) {
              columns = 3
            }
            if (width >= 1824) {
              columns = 4
            }
            return (
              <div ref={measureRef}>
                <Box pb={7}>
                  <ReactGallery
                    photos={engagementPhotos}
                    onClick={this.openLightbox}
                    columns={columns}
                  />
                </Box>
                <ReactGallery
                  photos={photos}
                  onClick={(event, object) =>
                    this.openLightbox(event, {
                      ...object,
                      index: engagementPhotos.length + object.index,
                    })
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
            )
          }}
        </Measure>
      </Box>
    )
  }
}
