import * as React from 'react';
import { Box, Card, Flex, Heading, Link } from 'src/components';
import { GoogleMap } from './GoogleMap';

const InfoCard: React.SFC<{ left: React.ReactNode; right: React.ReactNode; label: React.ReactNode }> = ({
  label,
  left,
  right,
}) => {
  return (
    <Card p={3}>
      <Flex flexWrap={['wrap', 'nowrap']}>
        <Flex width={['100%', '50%']} flexDirection="column">
          <Heading fontFamily="serif" css={{ position: 'absolute' }}>
            {label}
          </Heading>
          {left}
        </Flex>
        <Box width={['100%', '50%']}>{right}</Box>
      </Flex>
    </Card>
  );
};

export class Info extends React.Component {
  render() {
    return (
      <Box bg="offblue" p={[3, 5]}>
        <InfoCard
          label="Where"
          left={
            <Flex flex={1} flexDirection="column" alignItems="center" justifyContent="center" pt={4}>
              <div>
                <Heading fontFamily="serif" mb={[2, 4]}>
                  Saint Clements <br /> Castle & Marina
                </Heading>
                <Box className="adr" itemProp="address" itemType="http://schema.org/PostalAddress">
                  <Box mb={1} itemProp="streetAddress">
                    1931 Portland-Cobalt Rd
                  </Box>
                  <Box mb={[2, 4]}>
                    <span itemProp="addressLocality">Portland</span>, <span itemProp="addressRegion">CT</span>{' '}
                    <span itemProp="postalCode">06480</span>
                  </Box>
                </Box>
                <Box mb={2} itemProp="telephone">
                  (860) 342-0593
                </Box>
                <Link
                  target="_blank"
                  href="https://www.google.com/maps/place/Saint+Clements+Castle+%26+Marina/@41.5602033,-72.5660499,18z/data=!4m19!1m13!4m12!1m4!2m2!1d-73.9705538!2d40.7500007!4e1!1m6!1m2!1s0x89e6485575dd1441:0x5b7dbbbeed6e6d18!2sst+clements+castle!2m2!1d-72.5649483!2d41.560808!3m4!1s0x89e6485575dd1441:0x5b7dbbbeed6e6d18!8m2!3d41.560808!4d-72.5649483"
                >
                  Get Directions
                </Link>
              </div>
            </Flex>
          }
          right={<GoogleMap />}
        />
      </Box>
    );
  }
}
