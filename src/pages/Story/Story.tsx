import * as React from 'react';
import city1 from './city1.png';
import city2 from './city2.png';
import city3 from './city3.png';
import city4 from './city4.png';
import cloud from './cloud.svg';
import eiffelTower from './eiffeltower.png';
import proposal from './storyImages/proposal.jpg';

import { Parallax, ParallaxLayer } from 'react-spring';
import { Hide } from 'src/components/Hide/Hide';
import { Card, Flex, Heading } from '../../components';

const CLOUDS_START = 3.5;
const CITY_START = 0.3;

const stories = [
  {
    date: 'December, 2012',
    content: (
      <span>
        Once upon a time, there was a school called UConn, a bar named Huskies, and a clever friend Erin, who introduced
        Meghan and Travis.
      </span>
    ),
  },
  {
    date: 'Oct 31st, 2017',
    image: require('./storyImages/themanor.jpg'),
    content: (
      <span>
        Fast forward 5 years, Meghan and Travis decided long distance was overrated. Meghan made the move to Manhattan,
        and joined Travis in their soon to be cat castle.
      </span>
    ),
  },
  {
    additionalOffset: 0.1,
    content: (
      <span>
        Now this may be a shock to some…but Meghan LOVES Paris. Unapologetically loves the city of lights, and was not
        shy in her completely unrealistic wish to be proposed to under the Eiffel Tower. Meanwhile, Travis and Meghan
        begin their plan to go visit friends in Europe, conveniently enough, some of who live in Paris.
      </span>
    ),
  },
  {
    date: 'May, 1st 2018',
    content: (
      <span>
        Travis’s grand plan to convince Meghan that she is definitely not being proposed to in Paris begins. In steps
        Holly, who has a diverse skill set, including master of deception and international ring mule.
      </span>
    ),
  },
  {
    date: 'May 26th, 2018',
    content: (
      <span>
        Holly and Meghan go ring shopping, under the guise of creating a ring for Holly for her upcoming birthday. A
        completely plausible story, as Holly’s parents are gemologists… that or Meghan really is the most gullible human
        on the planet.
      </span>
    ),
  },
  {
    content: (
      <span>
        Meanwhile, Travis plans a weeklong trip to Rome, Dubrovnik and Athens to travel with his now-best-man, Dylan.
        Meghan and Travis make plans to meet in Paris on Bastille Day before continuing on their own trip to Berlin and
        then Copenhagen. During planning preparations, Travis becomes so upset with Meghan for bringing up the topic of
        a proposal that she is completely thrown off (and tells all of her friends that it really is not happening).
      </span>
    ),
  },
  {
    date: 'May 11th, 2018',
    content: (
      <span>
        Travis is a busy guy, traveling to Bethel unbeknownst to Meghan, to ask her parents permission to propose, and
        organizing the most epic of timelines. Travis arranges for Meghan’s four friends, who she studied abroad with,
        to be present in Paris when he proposes.
      </span>
    ),
  },
  {
    date: 'July 14th, 2018',
    content: (
      <span>
        Meghan and Travis meet in Paris, but as the perfect plan is not without issues, the photographer cancels the
        morning of the proposal. And come to find out later, the pedestrian bridge (original proposal site) is closed
        for Bastille Day.
      </span>
    ),
  },
  {
    content: (
      <span>
        Meghan, Travis, Cara, Amanda and Holly set out for “dinner” before their plan to see the fireworks for Bastille
        Day. In reality, they set out to meet Cara and Amanda’s boyfriends, and one of many surprises (Marissa and
        Gabe). One closed pedestrian bridge, multiple street closures, multiple tourist groups, and a multi-lane bridge
        later…
      </span>
    ),
  },
  {
    content: (
      <span>
        Surprise number one: Marissa calls Meghan’s name on the bridge. Cue screaming, happy tears and a neck wringing
        hug. Surprise number two: Marissa turns Meghan around to see the Eiffel Tower (read: Travis down on one knee in
        front of the Eiffel Tower). Cue more screaming, more happy tears and even a little hand flapping.
      </span>
    ),
    image: proposal,
  },
  {
    additionalOffset: 0.1,
    content: (
      <span>
        Not actually a surprise: Meghan says YES, and continues to cry all of the happiest tears, especially when she
        learns Travis planned for a post-proposal picnic to enjoy her favorite view (La Tour Eiffel). Champagne is
        popped, cheese is inhaled, and fireworks are watched.
      </span>
    ),
  },
];

export class Story extends React.Component {
  parallax: any;
  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={7}>
        <ParallaxLayer
          offset={0}
          factor={3}
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(166,195,213,1) 30%)' }}
        />
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
          offset={CLOUDS_START - 2.01}
          factor={7}
          style={{ background: 'linear-gradient(to bottom, #013147 3%,#C3DEEF 70%)' }}
        />
        <ParallaxLayer offset={CLOUDS_START - 1.2} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={CLOUDS_START - 0.7} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>
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
        <ParallaxLayer offset={6.4} speed={-0.5}>
          <img
            src={eiffelTower}
            style={{
              display: 'block',
              height: '490px',
              float: 'right',
              position: 'relative',
              right: '-25px',
            }}
          />
        </ParallaxLayer>

        {stories.map(({ content, additionalOffset, image, date }, index) => {
          return (
            <React.Fragment key={index}>
              <ParallaxLayer
                offset={(6.7 / stories.length) * index + 0.2 + (additionalOffset || 0) + (date ? 0.05 : 0)}
              >
                <Flex
                  css={index % 2 === 0 ? {} : { float: 'right' }}
                  flexDirection={index % 2 === 0 ? 'row' : 'row-reverse'}
                  alignItems="flex-start"
                >
                  <Card mx={4} css={{ maxWidth: '400px' }}>
                    <Heading textAlign="center" mb={2} fontFamily="serif">
                      {date}
                    </Heading>
                    {content}
                  </Card>
                  {image && (
                    <Hide small={true} xsmall={true}>
                      <Card
                        borderRadius={9999}
                        css={{ width: '200px', height: '200px', position: 'relative', top: '-20px' }}
                        mx={4}
                        p={2}
                      >
                        <div
                          style={{
                            backgroundImage: `url(${image})`,
                            borderRadius: '999px',
                            height: '100%',
                            width: '100%',
                            backgroundSize: 'cover',
                          }}
                        />
                      </Card>
                    </Hide>
                  )}
                </Flex>
              </ParallaxLayer>
            </React.Fragment>
          );
        })}
      </Parallax>
    );
  }
}
