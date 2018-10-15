import * as React from 'react';

import { FixedHeader } from './components/FixedHeader/FixedHeader';
import { HeaderVideo } from './components/HeaderVideo/HeaderVideo';
export class App extends React.Component {
  render() {
    return (
      <div style={{ height: '2000px' }}>
        <FixedHeader index={0} />
        <HeaderVideo />
      </div>
    );
  }
}
