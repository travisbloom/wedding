import * as React from 'react';
import { ITextProps, Text } from '../Text/Text';

interface IHeadingProps extends ITextProps {
  as?: 'h1' | 'h2' | 'h3';
}

export const Heading: React.SFC<IHeadingProps> = ({ as, ...props }) => (
  <Text fontSize={as === 'h2' ? 2 : 3} as={as} {...props} />
);
Heading.defaultProps = {
  as: 'h1',
  m: 0,
};
