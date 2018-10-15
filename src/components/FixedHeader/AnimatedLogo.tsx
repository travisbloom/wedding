import { interpolate } from 'flubber';
import * as React from 'react';
import { animated, Spring } from 'react-spring';
import { pathList } from './paths';

export class AnimatedLogo extends React.Component<{ index: number }, { paths: string[] }> {
  state = {
    paths: pathList,
  };
  render() {
    const { index } = this.props;
    const { paths } = this.state;
    const interpolator = interpolate(paths[index], paths[index + 1] || paths[0], { maxSegmentLength: 0.1 });
    return (
      <svg width="30" height="20">
        <g
          id="svgGroup"
          strokeLinecap="round"
          fillRule="evenodd"
          fontSize="9pt"
          stroke="#fff"
          strokeWidth="0.15mm"
          fill="none"
          style={{ stroke: '#fff', strokeWidth: '0.15mm', fill: 'none' }}
        >
          <Spring reset={true} native={true} from={{ t: 0 }} to={{ t: 1 }}>
            {({ t }) => <animated.path d={t.interpolate(interpolator)} />}
          </Spring>
        </g>
      </svg>
    );
  }
}
