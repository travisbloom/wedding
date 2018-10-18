import * as React from 'react';
import * as Rebass from 'rebass';
import { FontFamilyProps, FontWeightProps, LetterSpacingProps, LineHeightProps, TextAlignProps } from 'styled-system';
import { IBoxProps } from '../Box/Box';

export interface IBaseTextProps
  extends FontFamilyProps,
    FontWeightProps,
    TextAlignProps,
    LineHeightProps,
    LetterSpacingProps {}

export interface ITextProps extends IBoxProps, IBaseTextProps {}

export const Text: React.SFC<ITextProps> = Rebass.Text;
