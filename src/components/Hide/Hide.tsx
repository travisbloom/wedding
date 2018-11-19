import * as React from 'react';
import styled from 'styled-components';
import { display as styledDisplay, DisplayProps } from 'styled-system';
import { Box, IBoxProps } from '../Box/Box';

interface IHideProps extends IBoxProps, DisplayProps {
  xsmall?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  xlarge?: boolean;
}

const mapProps = (map: any) => (Component: React.ComponentType): React.SFC<IHideProps> => props => (
  <Component {...map(props)} />
);

export const Hide = mapProps(({ xsmall, small, medium, large, xlarge, display, as, ...props }: IHideProps) => ({
  display:
    display || [xsmall, small, medium, large, xlarge].map(n => (n ? 'none' : as === 'span' ? 'inline' : 'block')),
  ...props,
}))(
  styled(Box)(
    // @ts-ignore
    styledDisplay,
  ),
);
