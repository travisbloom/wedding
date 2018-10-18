import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { FixedHeader } from './components';
import { Home } from './pages/Home/Home';
import { theme } from './theme';
export class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <FixedHeader index={0} />
          <Home />
        </div>
      </ThemeProvider>
    );
  }
}
