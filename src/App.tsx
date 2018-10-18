import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Box, FixedHeader } from './components';
import { Home } from './pages/Home/Home';
import { theme } from './theme';

const Photos: React.SFC<any> = () => <Box css={{ height: '100vh', width: '100%', backgroundColor: 'blue' }}>hello</Box>;

export class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <>
            <FixedHeader index={0} />
            <Switch>
              <Route path="/gallery" component={Photos} />
              <Route path="/" component={Home} />
            </Switch>
          </>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}
