import * as React from 'react';
import { Omit } from 'react-router';
import { Link as RRLink, LinkProps } from 'react-router-dom';
import * as Rebass from 'rebass';
import { IBoxBaseProps, OmitDOMProps } from '../typeUtils';

export interface ILinkProps
  extends OmitDOMProps<React.HTMLProps<HTMLAnchorElement>>,
    IBoxBaseProps,
    Omit<Partial<LinkProps>, 'color'> {}

const BaseLink: React.SFC<ILinkProps> = Rebass.Link;
export const Link: React.SFC<ILinkProps> = props => (
  <BaseLink as={props.to ? RRLink : 'a'} color="gray" css={{ textDecoration: 'none' }} {...props} />
);
