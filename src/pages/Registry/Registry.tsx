import * as React from 'react';
import { Box, Card, Flex, Heading, Image } from 'src/components';
import styled from 'styled-components';
import headerImage from './headerImage.jpg';

const HeaderContainer = styled.div`
  background-image: url(${headerImage});
  background-size: cover;
  background-position: 29%;
  height: calc(100vh - 58px);
`;

export class Registry extends React.Component {
  render() {
    return (
      <>
        <HeaderContainer />
        <Box py={6} px={3} css={{ margin: '0 auto', textAlign: 'center' }}>
          <Heading fontSize={4} pb={2}>
            Registry
          </Heading>
          <Heading as="h2" pb={4}>
            Coming soon...
          </Heading>
        </Box>
      </>
    );
  }
}
