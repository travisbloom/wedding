import * as Rebass from 'rebass'
import { IBoxBaseProps, OmitDOMProps } from '../typeUtils'

export interface IBoxProps extends IBoxBaseProps, OmitDOMProps<React.HTMLProps<HTMLDivElement>> {}
export const Box: React.SFC<IBoxProps> = Rebass.Box
