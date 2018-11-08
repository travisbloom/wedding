import * as React from 'react';
import { Box, Card, Flex, Heading, Link } from 'src/components';
import { GoogleMap } from './GoogleMap';

const InfoCard: React.SFC<{ left: React.ReactNode; right: React.ReactNode; label: React.ReactNode }> = ({
  label,
  left,
  right,
}) => {
  return (
    <Card p={3} mb={4}>
      <Flex flexWrap={['wrap', 'nowrap']}>
        <Flex width={['100%', '50%']} flexDirection="column">
          <Heading fontFamily="serif" css={{ position: 'absolute' }} fontSize={[2, 3]}>
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
      <Box bg="offblue" px={[3, 5]} py={5}>
        <InfoCard
          label="Where"
          left={
            <Flex
              flex={1}
              flexDirection="column"
              alignItems={[null, 'center']}
              justifyContent={[null, 'center']}
              pt={4}
            >
              <Box width={[null, null, null, '300px']}>
                <Heading fontFamily="serif" mb={1}>
                  Saint Clements <br /> Castle & Marina
                </Heading>
                <Heading mb={[3, 4]} as="h2">
                  Ceremony Begins at 5pm
                </Heading>
                <Box className="adr" itemProp="address" itemType="http://schema.org/PostalAddress">
                  <Box mb={1} itemProp="streetAddress">
                    1931 Portland-Cobalt Rd
                  </Box>
                  <Box mb={1}>
                    <span itemProp="addressLocality">Portland</span>, <span itemProp="addressRegion">CT</span>{' '}
                    <span itemProp="postalCode">06480</span>
                  </Box>
                </Box>
                <Box itemProp="telephone">(860) 342-0593</Box>
                <Link
                  target="_blank"
                  href="https://www.google.com/maps/place/Saint+Clements+Castle+%26+Marina/@41.5602033,-72.5660499,18z/data=!4m19!1m13!4m12!1m4!2m2!1d-73.9705538!2d40.7500007!4e1!1m6!1m2!1s0x89e6485575dd1441:0x5b7dbbbeed6e6d18!2sst+clements+castle!2m2!1d-72.5649483!2d41.560808!3m4!1s0x89e6485575dd1441:0x5b7dbbbeed6e6d18!8m2!3d41.560808!4d-72.5649483"
                >
                  <Box py={3}>Get Directions</Box>
                </Link>
              </Box>
            </Flex>
          }
          right={<GoogleMap latLng={{ lat: 41.560896, lng: -72.564859 }} />}
        />
        <InfoCard
          label="Accommodations"
          left={
            <Flex flex={1} flexDirection="column" alignItems="center" justifyContent="center" pt={4}>
              <Box width={[null, null, '300px']}>
                <Heading fontFamily="serif" mb={[3, 4]}>
                  Courtyard Hartford Cromwell
                </Heading>
                <Box className="adr" itemProp="address" itemType="http://schema.org/PostalAddress">
                  <Box mb={1} itemProp="streetAddress">
                    4 Sebethe Drive
                  </Box>
                  <Box mb={1}>
                    <span itemProp="addressLocality">Cromwell</span>, <span itemProp="addressRegion">CT</span>{' '}
                    <span itemProp="postalCode">06416</span>
                  </Box>
                </Box>
                <Box itemProp="telephone">(860) 635-1001</Box>
                <Link
                  target="_blank"
                  href="http://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Ledan/Bloom%20Wedding%20%5EBDLHC%60LBWLBWA%60139.00%60USD%60false%604%609/7/19%609/8/19%6008/07/2019&app=resvlink&stop_mobi=yes"
                >
                  <Box pt={3} pb={1}>
                    Book A Room At Our Group Rate
                  </Box>
                </Link>
                <Link
                  target="_blank"
                  href="https://www.google.com/maps?q=courtyard+hartford+cromwell&rlz=1C5CHFA_enUS721US724&um=1&ie=UTF-8&sa=X&ved=0ahUKEwigtK7I1sPeAhXKjVkKHeEpAYAQ_AUIEygB"
                >
                  <Box pb={3} pt={1}>
                    Get Directions
                  </Box>
                </Link>
              </Box>
            </Flex>
          }
          right={<GoogleMap latLng={{ lat: 41.607199, lng: -72.706993 }} />}
        />
      </Box>
    );
  }
}
