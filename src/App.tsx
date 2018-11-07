import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Box, FixedHeader } from './components';
import { Home } from './pages/Home/Home';
import { Story } from './pages/Story/Story';
import { theme } from './theme';

const Photos: React.SFC<any> = () => (
  <Box css={{ height: '100vh', width: '100%', background: 'linear-gradient(to bottom, #1e5799 0%,#87bcde 37%)' }}>
    hello
  </Box>
);

export class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <>
            <FixedHeader />
            <Switch>
              <Route path="/gallery" component={Photos} />
              <Route path="/proposal" component={Story} />
              <Route path="/" component={Home} />
            </Switch>
          </>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}
