import * as React from 'react';
import styled from 'styled-components';
import { bgColor, BgColorProps, borderRadius, BorderRadiusProps, boxShadow, BoxShadowProps } from 'styled-system';
import { Box, IBoxProps } from '../Box/Box';

export interface ICardProps extends IBoxProps, BorderRadiusProps, BgColorProps, BoxShadowProps {}
export const Card: React.SFC<ICardProps> = styled(Box)(
  // @ts-ignore
  borderRadius,
  bgColor,
  boxShadow,
);

Card.defaultProps = {
  borderRadius: 1,
  p: 4,
  bg: 'white',
  boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)',
};
