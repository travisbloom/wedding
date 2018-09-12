/* tslint:disable:rule1 no-empty */
import 'jest-styled-components';

// @ts-ignore
window.matchMedia = () => {
  return {
    matches: false,
    addListener() {},
    removeListener() {},
  };
};
