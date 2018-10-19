import * as React from 'react';
import styled from 'styled-components';
import { bgColor, BgColorProps, borderRadius, BorderRadiusProps } from 'styled-system';
import { Box, IBoxProps } from '../Box/Box';

export interface ICardProps extends IBoxProps, BorderRadiusProps, BgColorProps {}
export const Card: React.SFC<ICardProps> = styled(Box)(
  // @ts-ignore
  borderRadius,
  bgColor,
);

Card.defaultProps = {
  borderRadius: 1,
  p: 4,
  bg: 'white',
};
