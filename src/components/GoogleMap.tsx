import * as React from "react"
import {
  GoogleMap as GoogleMapLib,
  Marker,
  withGoogleMap,
  withScriptjs,
  InfoWindow,
} from "react-google-maps"
import { compose, withProps } from "recompose"
import { useState } from "react"
import { Heading } from "./heading"
import { Box } from "./box"
import { Txt } from "./txt"

type Locations = "stclements" | "hotel" | "larrys"

const GoogleMapsContent: React.SFC<{}> = () => {
  const [openLocation, toggleOpenLocation] = useState<null | Locations>(null)
  return (
    <GoogleMapLib
      defaultZoom={10}
      onClick={() => toggleOpenLocation(null)}
      defaultCenter={{ lat: 41.576089, lng: -72.730968 }}
      options={{
        mapTypeControl: false,
        clickableIcons: false,
        panControl: false,
        scaleControl: false,
        streetViewControl: false,
      }}
    >
      <Marker
        position={{ lat: 41.607199, lng: -72.706993 }}
        onClick={() => toggleOpenLocation("hotel")}
      >
        {openLocation === "hotel" && (
          <InfoWindow onCloseClick={() => toggleOpenLocation(null)}>
            <Box p={2}>
              <Txt fontWeight="bold" mb={2}>
                Courtyard by Marriott Hartford Cromwell
              </Txt>
              <Box
                className="adr"
                itemProp="address"
                itemType="https://schema.org/PostalAddress"
              >
                <Box mb={1} itemProp="streetAddress">
                  4 Sebethe Drive
                </Box>
                <Box mb={1}>
                  <span itemProp="addressLocality">Cromwell</span>,{" "}
                  <span itemProp="addressRegion">CT</span>{" "}
                  <span itemProp="postalCode">06416</span>
                </Box>
              </Box>
            </Box>
          </InfoWindow>
        )}
      </Marker>
      <Marker
        position={{ lat: 41.558122, lng: -72.565677 }}
        onClick={() => toggleOpenLocation("stclements")}
      >
        {openLocation === "stclements" && (
          <InfoWindow onCloseClick={() => toggleOpenLocation(null)}>
            <Box p={2}>
              <Txt fontWeight="bold" mb={2}>
                Saint Clements Castle & Marina
              </Txt>
              <Box
                className="adr"
                itemProp="address"
                itemType="https://schema.org/PostalAddress"
              >
                <Box mb={1} itemProp="streetAddress">
                  1931 Portland-Cobalt Rd
                </Box>
                <Box mb={1}>
                  <span itemProp="addressLocality">Portland</span>,{" "}
                  <span itemProp="addressRegion">CT</span>{" "}
                  <span itemProp="postalCode">06480</span>
                </Box>
              </Box>
            </Box>
          </InfoWindow>
        )}
      </Marker>
      <Marker
        position={{ lat: 41.535269, lng: -72.909409 }}
        onClick={() => toggleOpenLocation("larrys")}
      >
        {openLocation === "larrys" && (
          <InfoWindow onCloseClick={() => toggleOpenLocation(null)}>
            <Box p={2}>
              <Txt fontWeight="bold" mb={2}>
                Sunday Bagels and Coffee <br /> Larry and Diane Selnick's
                Household
              </Txt>
              <Box
                className="adr"
                itemProp="address"
                itemType="https://schema.org/PostalAddress"
              >
                <Box mb={1} itemProp="streetAddress">
                  181 Lancaster Way
                </Box>
                <Box mb={1}>
                  <span itemProp="addressLocality">Cheshire</span>,{" "}
                  <span itemProp="addressRegion">CT</span>{" "}
                  <span itemProp="postalCode">06410</span>
                </Box>
              </Box>
            </Box>
          </InfoWindow>
        )}
      </Marker>
    </GoogleMapLib>
  )
}

export const GoogleMap = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAZDYLE0m3ty9JZWDx2LdFWZwdB9Zc8ay8&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `500px` }} />,
    containerElement: <div style={{ height: `500px`, width: "100%" }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(() => {
  return <GoogleMapsContent />
})
