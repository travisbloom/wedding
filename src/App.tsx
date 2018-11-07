import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Box, FixedHeader } from './components';
import { Home } from './pages/Home/Home';
import { PhotoGallery } from './pages/PhotoGallery/PhotoGallery';
import { Story } from './pages/Story/Story';
import { theme } from './theme';

export class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <>
            <FixedHeader />
            <Switch>
              <Route path="/gallery" component={PhotoGallery} />
              <Route path="/proposal" component={Story} />
              <Route path="/" component={Home} />
            </Switch>
          </>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}
