import * as React from 'react';
import { FixedHeader } from './components/FixedHeader/FixedHeader';
import { Home } from './pages/Home/Home';
export class App extends React.Component {
  render() {
    return (
      <div>
        <FixedHeader index={0} />
        <Home />
      </div>
    );
  }
}
