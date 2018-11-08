import * as React from 'react';
import { Box, Card, Flex, Heading, Image } from 'src/components';
import amazon from './amazon.png';

export class Registry extends React.Component {
  render() {
    return (
      <Box bg="offblue" px={[3, 5]} py={6} css={{ minHeight: '100vh' }}>
        <Card p={3} mb={4} mx="auto" css={{ textAlign: 'center', maxWidth: '400px' }}>
          <Heading fontFamily="serif">Registry</Heading>
          <Box p={4}>
            <Image src={amazon} />
          </Box>
        </Card>
      </Box>
    );
  }
}
