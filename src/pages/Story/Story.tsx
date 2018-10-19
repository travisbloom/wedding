import * as React from 'react';
import city1 from './city1.png';
import city2 from './city2.png';
import city3 from './city3.png';
import city4 from './city4.png';
import cloud from './cloud.svg';
import eiffelTower from './eiffeltower.png';

import { Parallax, ParallaxLayer } from 'react-spring';
import { Card, ICardProps } from '../../components';

const StoryContent: React.SFC<ICardProps> = props => <Card {...props} />;

const CLOUDS_START = 1.5;
const CITY_START = 0.3;

export class Story extends React.Component {
  parallax: any;
  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={5}>
        <ParallaxLayer offset={0} factor={3} style={{ backgroundColor: '#A6C3D5' }} />
        <ParallaxLayer
          offset={CITY_START}
          factor={1}
          speed={-1.2}
          style={{ backgroundImage: `url(${city4})`, backgroundSize: 'cover' }}
        />
        <ParallaxLayer
          offset={CITY_START + 0.3}
          factor={1}
          speed={-0.8}
          style={{ backgroundImage: `url(${city3})`, backgroundSize: 'cover' }}
        />
        <ParallaxLayer
          offset={CITY_START + 0.6}
          factor={0.5}
          speed={-0.4}
          style={{ backgroundImage: `url(${city2})`, backgroundSize: 'cover' }}
        />
        <ParallaxLayer
          offset={CITY_START + 0.9}
          factor={0.5}
          speed={0.2}
          style={{ backgroundImage: `url(${city1})`, backgroundSize: 'cover' }}
        />
        <ParallaxLayer
          offset={CLOUDS_START - 0.01}
          factor={5}
          style={{ background: 'linear-gradient(to bottom, #013147 3%,#C3DEEF 70%)' }}
        />
        <ParallaxLayer offset={CLOUDS_START + 0.2} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={CLOUDS_START + 0.95} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={CLOUDS_START + 0.2} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={CLOUDS_START + 0.8} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={cloud} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={CLOUDS_START + 1.8} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={cloud} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={4.2} speed={-0.5}>
          <img
            src={eiffelTower}
            style={{
              display: 'block',
              height: '590px',
              float: 'right',
              position: 'relative',
              right: '-25px',
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.2}>
          <StoryContent css={{ maxWidth: '400px' }} mx={4}>
            Travis and Meghan moved in together after 5 years of long distances. Nothing helps a couple bond like living
            in a 450 sq ft Manhattan apartment.
          </StoryContent>
        </ParallaxLayer>
        <ParallaxLayer offset={CLOUDS_START + 0.4}>
          <StoryContent css={{ maxWidth: '400px', float: 'right' }} mx={4}>
            In early July of 2018, Travis flew out to Europe for a vacation. The plan was to spend a week backpacking
            then meet up with Meghan
          </StoryContent>
        </ParallaxLayer>
        <ParallaxLayer offset={CLOUDS_START + 1}>
          <StoryContent css={{ maxWidth: '400px' }} mx={4}>
            On July 14th they both arrived in Paris and then headed off to meet Meghan's friends in the city
          </StoryContent>
        </ParallaxLayer>
        <ParallaxLayer offset={CLOUDS_START + 1.7}>
          <StoryContent css={{ maxWidth: '400px', float: 'right' }} mx={4}>
            There were a few...minor issues. The bridge he had planned on using was closed. The photographer he had paid
            to capture the moment was sick
          </StoryContent>
        </ParallaxLayer>
      </Parallax>
    );
  }
}
