import * as Rebass from 'rebass';
import styled from 'styled-components';
import { alignSelf, color, flex, fontSize, height, order, space, width } from 'styled-system';
import { IBoxBaseProps, OmitDOMProps } from '../typeUtils';
const css = props => props.css;

export interface IBoxProps extends IBoxBaseProps, OmitDOMProps<React.HTMLProps<HTMLDivElement>> {}
export const Box: React.SFC<IBoxProps> = styled('div')(
  // @ts-ignore
  space,
  width,
  height,
  fontSize,
  color,
  flex,
  order,
  alignSelf,
  css,
);
