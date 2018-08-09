declare module '*.svg';
declare module '*.png';
declare module '*.jpg';

declare module 'react-media' {
  export type MediaQuery = { [key: string]: string | number | boolean };
  export type MediaProps = {
    query: string | MediaQuery | MediaQuery[];
    render?: () => React.ReactNode;
    children?: React.ReactNode | ((matches: boolean) => React.ReactNode);
    targetWindow?: Window;
    defaultMatches?: boolean;
  };
  export type MediaInterface = React.ComponentType<MediaProps>;
  const Media: MediaInterface;
  export default Media;
}
