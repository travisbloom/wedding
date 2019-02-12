import * as React from 'react';
import { Box, Card, Flex, Heading, Image } from 'src/components';
import styled from 'styled-components';
import amazonImage from './amazon.svg';
import crateAndBarrelImage from './crateAndBarrel.png';
import headerImage from './headerImage.jpg';
import targetImage from './target.png';
import westElmImage from './westelm.png';

const HeaderContainer = styled.div`
  background-image: url(${headerImage});
  background-size: cover;
  background-position: 29%;
  height: calc(100vh - 58px);
`;

const registries = [
  {
    src: amazonImage,
    href: 'https://smile.amazon.com/wedding/share/travandmeghan',
    alt: 'Amazon Logo',
  },
  {
    src: targetImage,
    href: 'http://tgt.gifts/travisandmeghan',
    alt: 'Target Logo',
  },
  {
    src: crateAndBarrelImage,
    href: 'https://www.crateandbarrel.com/gift-registry/meghan-ledan-and-travis-bloom/r5932719',
    alt: 'Crate And Barrel Logo',
  },
  {
    src: westElmImage,
    href: 'https://www.westelm.com/registry/nfr9mvn5fp/registry-list.html',
    alt: 'West Elm Logo',
  },
];

export class Registry extends React.Component {
  render() {
    return (
      <>
        <HeaderContainer />
        <Box py={6} px={3} css={{ margin: '0 auto', textAlign: 'center' }}>
          <Heading fontSize={4} pb={4} css={{ textDecoration: 'underline' }}>
            Registry
          </Heading>
          {registries.map(({ href, alt, src }) => (
            <Box key={alt} css={{ maxWidth: '300px', textAlign: 'center' }} mx="auto" my={4}>
              <a href={href} target="_blank">
                <Image src={src} alt={alt} />
              </a>
            </Box>
          ))}
        </Box>
      </>
    );
  }
}
